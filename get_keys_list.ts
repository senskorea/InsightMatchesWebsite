import { translations } from './src/translations/index.ts';
import fs from 'fs';

fs.writeFileSync('en_keys.txt', Object.keys(translations.en).join('\n'));
fs.writeFileSync('ko_keys.txt', Object.keys(translations.ko).join('\n'));
fs.writeFileSync('fr_keys.txt', Object.keys(translations.fr).join('\n'));
