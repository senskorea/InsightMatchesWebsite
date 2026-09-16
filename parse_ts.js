import fs from 'fs';

const content = fs.readFileSync('src/translations/index.ts', 'utf8');

const jsonContent = content
    .replace('export const translations = ', '')
    .replace('export type Language = keyof typeof translations;', '')
    .replace('export type TranslationKey = keyof typeof translations.en;', '')
    .trim()
    .replace(/;$/, '');

const getTranslations = new Function('return ' + jsonContent);
const translations = getTranslations();

console.log("English substrings in KO:");
for (let key in translations.ko) {
    if (translations.ko[key] === translations.en[key] && !["KAIST", "KakaoMaps", "GoogleMaps", "Maintenance", "Horizon Europe", "EIC (Accelerator & Pathfinder)", "Erasmus+", "Interreg", "Network Busan", "Starter", "3,500,000 KRW", "5,000,000 KRW"].includes(translations.en[key])) {
        console.log(key, translations.ko[key]);
    }
}
