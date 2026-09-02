import { translations } from './src/translations/index.ts';

const en = Object.keys(translations.en);
const ko = Object.keys(translations.ko);
const fr = Object.keys(translations.fr);

const mKo = en.filter(k => !ko.includes(k));
const mFr = en.filter(k => !fr.includes(k));

if (mKo.length > 0 || mFr.length > 0) {
    console.log("Found missing keys! " + mKo.join(', ') + " | " + mFr.join(', '));
} else {
    console.log("Still no missing keys.");
}
