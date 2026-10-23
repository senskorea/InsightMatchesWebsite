const {chromium}=await import(process.env.DECK_PLAYWRIGHT_MODULE||'@playwright/test');
import {spawn,execFileSync} from 'node:child_process';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {rates} from '../deck/currency.mjs';

// Export the built deck, so the backup matches the exact deployment artifact.
const output=resolve(process.env.DECK_PDF_OUTPUT||'dist/deck/downloads');
const port=process.env.DECK_PDF_PORT||'5195';
const origin='http://127.0.0.1:'+port;
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port',port,'--strictPort'],{stdio:'ignore'});
let browser;
const revision=execFileSync('git',['rev-parse','--short','HEAD'],{encoding:'utf8'}).trim();
const generatedAt=new Date().toISOString();
try{
 let ready=false;
 for(let i=0;i<80;i++){
  if(server.exitCode!==null)throw new Error('PDF preview server failed to start');
  try{const response=await fetch(origin+'/deck/');if(response.ok){ready=true;break}}catch{/* Server starting. */}
  await new Promise(r=>setTimeout(r,250));
 }
 if(!ready)throw new Error('PDF preview server timed out');
 await mkdir(output,{recursive:true});
 browser=await chromium.launch({headless:true,...(process.env.DECK_BROWSER_CHANNEL?{channel:process.env.DECK_BROWSER_CHANNEL}:{})});
 const manifest={revision,generatedAt,files:{}};
 for(const currency of Object.keys(rates)){
  const page=await browser.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1,reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(origin+'/deck/?canvas=1&currency='+currency,{waitUntil:'networkidle'});
  const count=Number(await page.locator('main').getAttribute('data-slide-count'));
  if(!Number.isInteger(count)||count<1)throw new Error('Missing deck slide count');
  const images=[];
  for(let index=0;index<count;index++){
   if(Number(await page.locator('main').getAttribute('data-slide-index'))!==index)throw new Error('Slide navigation mismatch');
   const pause=page.getByRole('button',{name:'Pause cluster rotation',exact:true});
   if(await pause.count())await pause.click();
   await page.mouse.move(1910,1070);
   await page.evaluate(async()=>{
    await document.fonts.ready;
    await Promise.all([...document.images].map(image=>image.decode()));
    await Promise.all([...document.querySelectorAll('svg image')].map(async element=>{
     const image=new Image();image.src=element.getAttribute('href');await image.decode();
    }));
   });
   await page.waitForTimeout(250);
   images.push(await page.screenshot({type:'jpeg',quality:90,animations:'disabled'}));
   if(index<count-1){await page.locator('main').focus();await page.keyboard.press('ArrowRight')}
  }
  if(errors.length)throw new Error(errors.join('\n'));
  await page.close();
  const print=await browser.newPage();
  await print.setContent('<!doctype html><html><head><title>InsightMatches · '+currency+' · '+revision+'</title><style>@page{size:1920px 1080px;margin:0}*{box-sizing:border-box}html,body{margin:0}section{width:1920px;height:1080px;break-after:page}section:last-child{break-after:auto}img{display:block;width:100%;height:100%}</style></head><body>'+images.map(buffer=>'<section><img src="data:image/jpeg;base64,'+buffer.toString('base64')+'"></section>').join('')+'</body></html>',{waitUntil:'load'});
  await print.evaluate(async()=>Promise.all([...document.images].map(image=>image.decode())));
  const filename='insightmatches-deck-'+currency+'.pdf';
  await print.pdf({path:resolve(output,filename),preferCSSPageSize:true,printBackground:true,margin:{top:0,right:0,bottom:0,left:0}});
  await print.close();
  const bytes=(await readFile(resolve(output,filename))).length;
  if(bytes<10000)throw new Error('Unexpected empty PDF');
  manifest.files[currency]={filename,pages:count,bytes};
  console.log('PDF '+currency+': '+count+' slides, '+(bytes/1e6).toFixed(1)+' MB');
 }
 await writeFile(resolve(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
}finally{
 await browser?.close();server.kill('SIGTERM');
}
