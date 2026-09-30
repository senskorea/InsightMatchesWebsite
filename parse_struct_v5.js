import fs from 'fs';
const fileContent = fs.readFileSync('src/translations/index.ts', 'utf8');

function extractKeys(text) {
  const keys = [];
  // Find lines that look like key: "value",
  const lines = text.split('\n');
  for (const line of lines) {
    const match = line.match(/^\s*([a-zA-Z0-9_]+)\s*:/);
    if (match) {
      keys.push(match[1]);
    }
  }
  return keys;
}

const enBlockStart = fileContent.indexOf('en: {');
const koBlockStart = fileContent.indexOf('ko: {');
const frBlockStart = fileContent.indexOf('fr: {');
const frBlockEnd = fileContent.lastIndexOf('}'); // Approximate but works for this

const enBlock = fileContent.slice(enBlockStart, koBlockStart);
const koBlock = fileContent.slice(koBlockStart, frBlockStart);
const frBlock = fileContent.slice(frBlockStart, frBlockEnd);

const enKeys = extractKeys(enBlock);
const koKeys = extractKeys(koBlock);
const frKeys = extractKeys(frBlock);

console.log(`EN: ${enKeys.length}, KO: ${koKeys.length}, FR: ${frKeys.length}`);

const missingKo = enKeys.filter(k => !koKeys.includes(k) && k !== 'en');
const missingFr = enKeys.filter(k => !frKeys.includes(k) && k !== 'en');

console.log("Missing KO:", missingKo);
console.log("Missing FR:", missingFr);
