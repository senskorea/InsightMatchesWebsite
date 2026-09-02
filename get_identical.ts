import { translations } from './src/translations/index.ts';

const en = translations.en;
const ko = translations.ko;
const fr = translations.fr;

for (const key of Object.keys(en)) {
    if (ko[key] === en[key]) {
        console.log(`[ko] EXACTLY IDENTICAL: ${key} = "${ko[key]}"`);
    }
    if (fr[key] === en[key]) {
        console.log(`[fr] EXACTLY IDENTICAL: ${key} = "${fr[key]}"`);
    }
}
