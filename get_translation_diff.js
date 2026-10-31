import fs from 'fs';
const content = fs.readFileSync('src/translations/index.ts', 'utf8');
const enBlockMatch = content.match(/en: \{([\s\S]*?)\},\n\s+ko:/);
const koBlockMatch = content.match(/ko: \{([\s\S]*?)\},\n\s+fr:/);
const frBlockMatch = content.match(/fr: \{([\s\S]*?)\}\n/);

if (!enBlockMatch || !koBlockMatch || !frBlockMatch) {
    console.error("Failed to parse blocks");
    process.exit(1);
}

const parseKeys = (block) => {
    const keys = [];
    const lines = block.split('\n');
    for (const line of lines) {
        const match = line.match(/^\s*([a-zA-Z0-9_]+):/);
        if (match) {
            keys.push(match[1]);
        }
    }
    return keys;
};

const enKeys = parseKeys(enBlockMatch[1]);
const koKeys = parseKeys(koBlockMatch[1]);
const frKeys = parseKeys(frBlockMatch[1]);

console.log("EN Keys:", enKeys.length);
console.log("KO Keys:", koKeys.length);
console.log("FR Keys:", frKeys.length);

const missingKo = enKeys.filter(k => !koKeys.includes(k));
const missingFr = enKeys.filter(k => !frKeys.includes(k));

console.log("Missing KO:", missingKo);
console.log("Missing FR:", missingFr);
