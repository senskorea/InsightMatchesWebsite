import fs from 'fs';
const content = fs.readFileSync('src/translations/index.ts', 'utf8');

const parseKeys = (str) => {
    const keys = [];
    let match;
    const regex = /([a-zA-Z0-9_]+)\s*:/g;
    while ((match = regex.exec(str)) !== null) {
        keys.push(match[1]);
    }
    return keys;
}

const enBlock = content.substring(content.indexOf('en: {'), content.indexOf('ko: {'));
const koBlock = content.substring(content.indexOf('ko: {'), content.indexOf('fr: {'));
const frBlock = content.substring(content.indexOf('fr: {'));

const enKeys = parseKeys(enBlock);
const koKeys = parseKeys(koBlock);
const frKeys = parseKeys(frBlock);

const uniqueEn = [...new Set(enKeys)];
const uniqueKo = [...new Set(koKeys)];
const uniqueFr = [...new Set(frKeys)];

console.log("EN unique keys:", uniqueEn.length);
console.log("KO unique keys:", uniqueKo.length);
console.log("FR unique keys:", uniqueFr.length);

const missingKo = uniqueEn.filter(k => !uniqueKo.includes(k) && k !== 'en');
const missingFr = uniqueEn.filter(k => !uniqueFr.includes(k) && k !== 'en');

console.log("Missing KO:", missingKo);
console.log("Missing FR:", missingFr);
