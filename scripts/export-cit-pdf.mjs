import {spawn} from 'node:child_process';
import {mkdir,stat} from 'node:fs/promises';
import {resolve} from 'node:path';
const {chromium}=await import(process.env.DECK_PLAYWRIGHT_MODULE||'@playwright/test');
const port=process.env.CIT_PDF_PORT||'5197';
const origin='http://127.0.0.1:'+port;
const output=resolve(process.env.CIT_PDF_OUTPUT||'dist/cit/InsightMatches-CIT.pdf');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port',port,'--strictPort'],{stdio:'ignore'});
let browser;
try{
 let ready=false;
 for(let i=0;i<80;i++){
  if(server.exitCode!==null)throw new Error('CIT preview server failed');
  try{if((await fetch(origin+'/cit/')).ok){ready=true;break}}catch{}
  await new Promise(r=>setTimeout(r,250));
 }
 if(!ready)throw new Error('CIT preview server timed out');
 browser=await chromium.launch({headless:true,...(process.env.DECK_BROWSER_CHANNEL?{channel:process.env.DECK_BROWSER_CHANNEL}:{})});
 const page=await browser.newPage({viewport:{width:1536,height:924}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(origin+'/cit/',{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()))});
 if(await page.locator('.slide').count()!==16)throw new Error('Expected 16 CIT slides');
 await page.emulateMedia({media:'print'});
 await page.evaluate(()=>document.querySelectorAll('.slide').forEach(s=>s.removeAttribute('aria-hidden')));
 const overflow=await page.evaluate(()=>[...document.querySelectorAll('.slide')].flatMap((s,i)=>{const box=s.getBoundingClientRect();return [...s.querySelectorAll('h1,h2,h3,p,.metric,.call-id,.footer,td,th')].filter(e=>{const r=e.getBoundingClientRect();return r.bottom>box.bottom+1||r.right>box.right+1||r.left<box.left-1}).map(e=>({slide:i+1,text:e.textContent.slice(0,70)}))}));
 if(overflow.length)throw new Error('CIT content overflow: '+JSON.stringify(overflow));
 if(errors.length)throw new Error(errors.join('\n'));
 await mkdir(resolve(output,'..'),{recursive:true});
 await page.pdf({path:output,preferCSSPageSize:true,printBackground:true,tagged:true,margin:{top:0,right:0,bottom:0,left:0}});
 console.log(`CIT PDF: 16 pages, ${((await stat(output)).size/1e6).toFixed(1)} MB → ${output}`);
}finally{await browser?.close();server.kill()}
