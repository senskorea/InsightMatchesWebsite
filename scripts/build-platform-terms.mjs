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
<style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:linear-gradient(180deg,#f0f9ff 0,#f8fafc 520px);color:#334155;font:16px/1.85 Inter,system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}header,main,footer{max-width:1080px;margin:auto;padding:32px}header{padding-top:40px;padding-bottom:32px}.brand{display:inline-flex;align-items:center;gap:12px;color:#0f172a;font-weight:750;font-size:25px;letter-spacing:-1px;text-decoration:none}.brand-accent{color:#0ea5e9}.brand-icon{display:grid;place-items:center;position:relative;width:44px;height:44px;border-radius:11px;background:#0f172a;box-shadow:0 6px 16px #0f172a20}.brand-icon:before{content:"";width:26px;height:26px;border:2px solid #0ea5e999;border-radius:50%}.brand-icon:after{content:"";position:absolute;width:11px;height:11px;border-radius:50%;background:#0ea5e9;box-shadow:0 0 12px #0ea5e966}nav{display:flex;gap:10px;flex-wrap:wrap;margin:28px 0 24px}nav a{padding:8px 15px;border:1px solid #cbd5e1;border-radius:8px;background:#fff;color:#334155;font-size:14px;font-weight:600;text-decoration:none}nav a:first-child,nav a:nth-child(2){background:#0f172a;border-color:#0f172a;color:#fff}nav a:hover{border-color:#0284c7;box-shadow:0 2px 8px #0f172a0d}a{color:#0369a1;text-underline-offset:4px}a:focus-visible,summary:focus-visible{outline:3px solid #0284c7;outline-offset:4px}main{padding-top:0}section{padding:40px 48px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;box-shadow:0 8px 32px #0f172a04}section+section{margin-top:32px}h1{font-size:clamp(30px,4vw,42px);font-weight:750;letter-spacing:-1.3px;line-height:1.2;color:#0f172a;margin:32px 0 24px}h2{font-size:21px;font-weight:650;letter-spacing:-.4px;line-height:1.45;margin-top:40px;padding-top:28px;border-top:1px solid #e2e8f0;color:#0f172a;scroll-margin-top:24px}p{overflow-wrap:anywhere;margin:18px 0}details{background:#f8fafc;border:1px solid #e2e8f0;padding:14px 18px;border-radius:8px}details ol{padding-left:24px;font-size:14px;line-height:1.65;columns:2;column-gap:32px}details li{break-inside:avoid;margin:8px 0}summary{cursor:pointer;font-size:14px;font-weight:650;color:#0f172a}.note{font-size:13px;line-height:1.7;color:#475569;max-width:800px;margin:10px 0}footer{border-top:1px solid #e2e8f0;margin-top:24px;font-size:14px}footer>a{font-weight:600}@media(max-width:640px){header,main,footer{padding:20px}header{padding-top:28px}main{padding-top:0}section{padding:24px 20px;border-radius:12px}nav{gap:8px}nav a{padding:9px 12px;font-size:13px}details ol{columns:1}h1{letter-spacing:-.8px}h2{font-size:20px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}@media print{body{background:white;color:#000;font-size:11pt}header,main,footer{max-width:none;padding:0}nav,details{display:none}section{border:0;box-shadow:none;padding:0}section+section{break-before:page}h1{font-size:24pt}h2{break-after:avoid;font-size:15pt}.brand-icon{box-shadow:none}a{color:inherit}}
</style></head>
<body><header><a class="brand" href="/" aria-label="InsightMatches home"><span class="brand-icon" aria-hidden="true"></span><span>Insight<span class="brand-accent">Matches</span></span></a><nav aria-label="Languages and downloads"><a href="#en">English</a><a href="#ko" lang="ko">한국어</a><a href="${base}v1.0/en.md" download>Download EN</a><a href="${base}v1.0/ko.md" download lang="ko">한국어 다운로드</a><a href="${archive?base:base+'v1.0/'}">${archive?'Current terms':'Version 1.0 archive'}</a></nav><p class="note">Version 1.0 · Published 10 November 2026. Applies upon valid acceptance or contractual incorporation, not merely by visiting this page.</p><p class="note" lang="ko">버전 1.0 · 2026년 11월 10일 게시. 유효한 동의 또는 계약 편입 시 적용되며, 이 페이지 방문만으로 동의한 것으로 간주하지 않습니다.</p></header><main>${sections.join('\n')}</main><footer><a href="mailto:info@insightmatches.com">info@insightmatches.com</a><p class="note">These Terms are not a privacy notice. 개인정보 처리방침을 대체하지 않습니다.</p></footer></body></html>\n`;
}
const outputs = [['index.html',page(false)],['v1.0/index.html',page(true)]];
for (const [path, html] of outputs) {
  if (process.argv.includes('--check')) assert.equal(await readFile(new URL(path,root),'utf8'),html,`Stale generated page: ${path}`);
  else await writeFile(new URL(path,root),html);
}
console.log('PASS: 20 articles / 52 matching clauses per language; no draft placeholders; generated pages match.');
for (const [i,doc] of docs.entries()) console.log(`${i?'ko':'en'} SHA256 ${createHash('sha256').update(doc).digest('hex')}`);
