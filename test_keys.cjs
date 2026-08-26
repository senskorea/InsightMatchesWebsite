const fs = require('fs');

// We have the file in src/translations/index.ts
// Let's parse it manually line by line
const fileContent = fs.readFileSync('src/translations/index.ts', 'utf8');

// I'll extract the blocks
const enMatch = fileContent.match(/en: \{([\s\S]*?)\n  \},/);
const koMatch = fileContent.match(/ko: \{([\s\S]*?)\n  \},/);
const frMatch = fileContent.match(/fr: \{([\s\S]*?)\n  \}/);

if (!enMatch || !koMatch || !frMatch) {
  console.log("Could not find one of the blocks");
  process.exit(1);
}

const extractKeys = (block) => {
  const keys = [];
  const lines = block.split('\n');
  for (const line of lines) {
    const match = line.match(/^\s+([a-zA-Z0-9_]+):/);
    if (match) {
      keys.push(match[1]);
    }
  }
  return keys;
};

const enKeys = extractKeys(enMatch[1]);
const koKeys = extractKeys(koMatch[1]);
const frKeys = extractKeys(frMatch[1]);

console.log("en count:", enKeys.length);
console.log("ko count:", koKeys.length);
console.log("fr count:", frKeys.length);

const koMissing = enKeys.filter(k => !koKeys.includes(k));
const frMissing = enKeys.filter(k => !frKeys.includes(k));

console.log("ko missing:", koMissing);
console.log("fr missing:", frMissing);
