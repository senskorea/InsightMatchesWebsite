import{readFile,writeFile,mkdir}from'node:fs/promises';
import{resolve}from'node:path';
import{existsSync}from'node:fs';
import{slides,count,iteration}from'../cit/slides.mjs';
import {korean} from '../cit/korean.mjs';
if(slides.length!==count)throw Error('Printed deck slide count mismatch');
const font=await readFile(new URL('../cit/assets/Inter.ttf',import.meta.url));
const license=await readFile(new URL('../cit/assets/Inter-LICENSE.txt',import.meta.url),'utf8');
const css='/* '+license+' */\n@font-face{font-family:Inter;src:url(data:font/ttf;base64,'+font.toString('base64')+') format("truetype");font-weight:100 900;font-display:block}\n'+await readFile(new URL('../printed-deck/styles.css',import.meta.url),'utf8')+'\n'+await readFile(new URL('../cit/styles.css',import.meta.url),'utf8');
const languageScript = await readFile(new URL('../cit/language.js', import.meta.url), 'utf8');
const script = (await readFile(new URL('../printed-deck/viewer.js', import.meta.url), 'utf8'))
  .replace('InsightMatches-Printed-Deck-HTML-Review.html', 'InsightMatches-Global-CIT-HTML-Review.html')
  .replace("'Slide '+(current+1)+': '+shells[current].querySelector('h1,h2').textContent", 'citLanguage.announcement(shells[current])')
  .replace("overview?'Single slide':'All slides'", "overview?citLanguage.text('Single slide','한 장씩 보기'):citLanguage.text('All slides','전체 보기')")
  .replace('document.documentElement.outerHTML', 'citLanguage.serialize()');
const options=slides.map(s=>`<option value="${s.n-1}">${String(s.n).padStart(2,'0')} · ${s.chapter}</option>`).join('');
let html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="InsightMatches: research funding, international collaboration and proposal support. Korean won HTML review deck."><meta name="robots" content="noindex,nofollow"><title>InsightMatches × Global CIT · HTML Review</title><style>${css}</style></head><body><svg class="asset-library" aria-hidden="true"><defs><symbol id="insightmatches-logo" viewBox="0 0 2862 786"><image href="asset:insightmatches-original.png" width="2862" height="786"/></symbol></defs></svg><main class="stage" aria-label="InsightMatches presentation for Global CIT">${slides.map(s=>`<div class="slide-shell" data-index="${s.n-1}">${s.html}</div>`).join('\n')}</main><div id="progress"></div><nav aria-label="Presentation controls"><div><button id="prev" aria-label="Previous slide">←</button><span id="position"></span><button id="next" aria-label="Next slide">→</button><select id="jump" aria-label="Go to slide">${options}</select></div><div><span class="krw">KRW</span><button id="cit-language" type="button" lang="ko" aria-label="Switch to Korean">한국어</button><button id="overview" aria-pressed="false">All slides</button><button id="save">Save HTML</button></div></nav><div id="announce" role="status" aria-live="polite"></div><script>const korean = ${JSON.stringify(korean).replaceAll('<', '\\u003c')};\n${languageScript}\n${script}</script></body></html>`;
const assets=[...new Set([...html.matchAll(/asset:([^"<>]+)/g)].map(m=>m[1]))];
for(const name of assets){if(!name.split('/').every(part=>/^[\w-][\w.-]*$/.test(part)))throw Error('Invalid asset');const citLocal=resolve('cit/assets',name);const local=existsSync(citLocal)?citLocal:resolve('printed-deck/assets',name);const bytes=await readFile(existsSync(local)?local:resolve('public/deck-assets',name));const mime=name.endsWith('.svg')?'image/svg+xml':name.endsWith('.png')?'image/png':'image/jpeg';html=html.replaceAll('asset:'+name,'data:'+mime+';base64,'+bytes.toString('base64'))}
await mkdir('public/cit',{recursive:true});await writeFile('public/cit/index.html',html);
await writeFile('cit/deck.json',JSON.stringify({title:'InsightMatches × Global CIT',iteration,phase:'HTML review only',currency:'KRW',url:'https://insightmatches.com/cit/',slides:slides.map(({n,chapter,title})=>({position:n,chapter,title:title.replace(/<[^>]*>/g,' ')}))},null,2)+'\n');
console.log(`Built printed-deck HTML: ${count} slides, ${assets.length} embedded assets, ${(Buffer.byteLength(html)/1e6).toFixed(1)} MB`);
