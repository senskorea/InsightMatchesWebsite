import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const source=readdirSync('deck').filter(f=>/\.(jsx|css)$/.test(f)).map(f=>read('deck/'+f)).join('\n');
assert(!source.includes('/journey-assets/'),'Prototype asset paths must not leak');
assert(!source.includes('motion/react'),'Use the website motion dependency');
for(const file of new Set([...(source.match(/\b[a-zA-Z][\w-]*\.(?:png|jpe?g)/g)||[]),...['korea','japan','australia'].map(country=>country+'_horizon_europe_agreement.png')])){
 assert(existsSync('public/deck-assets/'+file),'Missing source asset: '+file);
 assert(existsSync('dist/deck-assets/'+file),'Missing built asset: '+file);
}
const deck=read('dist/deck/index.html'),main=read('dist/index.html');
assert(deck.includes('/assets/deck-'),'Separate deck entry required');
assert(!main.includes('/assets/deck-'),'Homepage must not load deck bundle');
assert(deck.includes('https://insightmatches.com/deck/'),'Canonical URL missing');
assert(source.includes("url.searchParams.set('canvas','1')"),'Frame recursion guard missing');
assert(source.includes('Whole new networks.'),'Approved partnership copy missing');
for(const file of ['cluster-profiles.jsx','eu-funding.jsx']){
 assert(read('deck/'+file).includes('<motion.div layoutId="research-funding-wheel"'),'Shared wheel transition needs an HTML layout container: '+file);
}
assert(!read('deck/eu-funding.jsx').includes('Our focus is European funding.'),'Removed funding filler must stay removed');
assert(read('deck/network-partnerships.jsx').includes('{reveal&&'),'Partnership articles must wait for the reveal step');
assert(Math.round((1-3750/8396)*100)===55,'Price headline must match the displayed benchmark');
console.log('PASS: deck entry, isolation, all image paths, frame guard and approved copy');
