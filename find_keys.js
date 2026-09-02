import { translations } from './src/translations/index.ts';

const en = Object.keys(translations.en);
const ko = Object.keys(translations.ko);
const fr = Object.keys(translations.fr);

console.log(`en length: ${en.length}`);
console.log(`ko length: ${ko.length}`);
console.log(`fr length: ${fr.length}`);

const missingKo = en.filter(k => !ko.includes(k));
const missingFr = en.filter(k => !fr.includes(k));

console.log("Missing ko:", missingKo);
console.log("Missing fr:", missingFr);
