// Deterministic raster and ICO exports of the canonical brand SVG.
// Run: node scripts/generate-favicons.cjs (requires sharp).
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const publicDir = path.resolve(__dirname, '../public');

async function main() {
  const svg = await fs.readFile(path.join(publicDir, 'favicon.svg'));
  for (const [name, size] of [
    ['favicon.png', 256],
    ['apple-touch-icon.png', 180],
    ['icon-192.png', 192],
    ['icon-512.png', 512],
  ]) {
    await sharp(svg).resize(size, size).png().toFile(path.join(publicDir, name));
  }
  // ICO directory with PNG-compressed entries, supported by modern browsers.
  const sizes = [16, 32, 48];
  const images = await Promise.all(sizes.map(size => sharp(svg).resize(size, size).png().toBuffer()));
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach((png, index) => {
    const entry = 6 + index * 16;
    header[entry] = sizes[index];
    header[entry + 1] = sizes[index];
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), Buffer.concat([header, ...images]));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
