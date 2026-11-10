import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const root = new URL('../public/legal/platform-terms/', import.meta.url);
const docs = await Promise.all(['en', 'ko'].map(lang => readFile(new URL(`v1.0/${lang}.md`, root), 'utf8')));
const ids = text => [...text.matchAll(/^(\d+\.\d+) /gm)].map(m => m[1]);
assert.deepEqual(ids(docs[0]), ids(docs[1]));
assert.equal(ids(docs[0]).length, 52);
for (const [i, text] of docs.entries()) {
  assert.equal((text.match(i ? /^## 제\d+조 /gm : /^## Article /gm) || []).length, 20);
  assert.doesNotMatch(text, /REVIEW DRAFT|검토용 초안|\[[^\]]*(?:REQUIRED|VERIFY)|\[승인된/);
  assert.ok(text.includes('info@insightmatches.com'));
}
const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const sections = docs.map((text,i) => {
  const lang = i ? 'ko' : 'en';
  const headings = [...text.matchAll(/^## (.+)$/gm)].map(m => m[1]);
  const body = text.trim().split(/\n\n+/).map(block => {
    if (block.startsWith('# ')) return `<h1>${escape(block.slice(2))}</h1>`;
    if (block.startsWith('## ')) return `<h2 id="${lang}-${block.match(/\d+/)[0]}">${escape(block.slice(3))}</h2>`;
    return `<p>${escape(block)}</p>`;
  }).join('\n');
  return `<section id="${lang}" lang="${lang}" aria-label="${i?'한국어 이용약관':'English terms'}"><details><summary>${i?'목차':'Contents'}</summary><ol>${headings.map((h,n)=>`<li><a href="#${lang}-${n+1}">${escape(h)}</a></li>`).join('')}</ol></details>${body}</section>`;
});
function page(archive) {
  const base = '/legal/platform-terms/';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Platform Terms | InsightMatches</title><meta name="description" content="InsightMatches business platform terms, version 1.0, in English and Korean."><link rel="canonical" href="https://insightmatches.com${base}${archive?'v1.0/':''}">
<style>*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f8fafc;color:#0f172a;font:17px/1.75 system-ui,sans-serif}header,main,footer{max-width:900px;margin:auto;padding:24px}header{border-bottom:1px solid #cbd5e1}.brand{font-weight:750;font-size:22px;text-decoration:none}nav{display:flex;gap:18px;flex-wrap:wrap;margin-top:16px}a{color:#075985;text-underline-offset:3px}a:focus-visible,summary:focus-visible{outline:3px solid #0284c7;outline-offset:4px}h1{font-size:clamp(28px,5vw,40px);line-height:1.25}h2{font-size:23px;line-height:1.4;margin-top:42px;scroll-margin-top:20px}p{overflow-wrap:anywhere}section+section{border-top:2px solid #94a3b8;margin-top:60px;padding-top:32px}details{background:#e2e8f0;padding:16px;border-radius:8px}summary{cursor:pointer;font-weight:650}.note{font-size:15px;color:#475569}footer{border-top:1px solid #cbd5e1}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}@media print{body{background:white;font-size:11pt}header,main,footer{max-width:none}nav,details{display:none}section+section{break-before:page}h2{break-after:avoid}}</style></head>
<body><header><a class="brand" href="/">InsightMatches</a><nav aria-label="Languages and downloads"><a href="#en">English</a><a href="#ko" lang="ko">한국어</a><a href="${base}v1.0/en.md" download>Download EN</a><a href="${base}v1.0/ko.md" download lang="ko">한국어 다운로드</a><a href="${archive?base:base+'v1.0/'}">${archive?'Current terms':'Version 1.0 archive'}</a></nav><p class="note">Version 1.0 · Published 10 November 2026. Applies upon valid acceptance or contractual incorporation, not merely by visiting this page.</p><p class="note" lang="ko">버전 1.0 · 2026년 11월 10일 게시. 유효한 동의 또는 계약 편입 시 적용되며, 이 페이지 방문만으로 동의한 것으로 간주하지 않습니다.</p></header><main>${sections.join('\n')}</main><footer><a href="mailto:info@insightmatches.com">info@insightmatches.com</a><p class="note">These Terms are not a privacy notice. 개인정보 처리방침을 대체하지 않습니다.</p></footer></body></html>\n`;
}
const outputs = [['index.html',page(false)],['v1.0/index.html',page(true)]];
for (const [path, html] of outputs) {
  if (process.argv.includes('--check')) assert.equal(await readFile(new URL(path,root),'utf8'),html,`Stale generated page: ${path}`);
  else await writeFile(new URL(path,root),html);
}
console.log('PASS: 20 articles / 52 matching clauses per language; no draft placeholders; generated pages match.');
for (const [i,doc] of docs.entries()) console.log(`${i?'ko':'en'} SHA256 ${createHash('sha256').update(doc).digest('hex')}`);
