import {slides as printed} from '../printed-deck/slides.mjs';
import {slides as original} from './opportunity-source.mjs';
export const count=20;
export const iteration=3;
const logo='<svg class="brand" role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg>';
function page(n,chapter,title,body,note='',classes=''){
 return {n,chapter,title,html:`<section class="slide ${classes}"><header>${logo}<span>${chapter}</span></header><h2>${title}</h2>${body}<footer><span>${note||'InsightMatches × Global CIT · European research opportunities'}</span><span class="folio">${String(n).padStart(2,'0')} / ${count}</span></footer></section>`};
}
function reuse(i,n){const s=printed[i-1];return {...s,n,html:s.html.replace(/\d{2} \/ 13/g,`${String(n).padStart(2,'0')} / ${count}`)}}
function specific(i,n,chapter,title){const s=original[i-1];let content=s.slice(s.indexOf('<h2>'),s.indexOf('<div class="footer">'));if(title)content=content.replace(/<h2>[\s\S]*?<\/h2>/,`<h2>${title}</h2>`);const note=s.match(/<div class="source">([\s\S]*?)<\/div>/)?.[1]||'';return page(n,chapter,title||content.match(/<h2>([\s\S]*?)<\/h2>/)?.[1],content.replace(/^<h2>[\s\S]*?<\/h2>/,''),note,'cit-specific');}
function organisations(){
 const s=reuse(4,4);s.html=s.html.replace('audience-slide','audience-slide cit-organisations');
 s.html=s.html.replace(/<div class="organisation-logo ([^"]+)">([\s\S]*?)<\/div>/g,(_,cls,img)=>{
  const name=img.match(/alt="([^"]+)"/)[1];
  const mark=cls==='ortcloud'?`<svg class="ortcloud-symbol" viewBox="0 0 190 201" role="img" aria-label="OrtCloud symbol"><image href="asset:OrtCloud_Logo_Original.png" width="851" height="201"/></svg>`:img;
  return `<div class="organisation-logo ${cls}"><div class="logo-mark">${mark}</div><span>${name}</span></div>`;
 });return s;
}
function opportunity(old,n,chapter,title,file,partners,grant,budget){
 const s=specific(old,n,chapter,title);
 s.html=s.html.replace(/<div class="op-visual">[\s\S]*?<\/div><div class="op-stats">/,`<div class="op-visual authentic-tech"><img src="asset:${file}" alt="Official CIT ${chapter.toLowerCase()} technology image"/><p class="small">CIT product and technology materials</p></div><div class="op-stats">`);
 s.html=s.html.replace(/<p class="small">€[^<]*<\/p>/g,'');
 s.html=s.html.replace(/<div class="dateband">/,`<div class="cit-planning"><div><span>Indicative EU funding for CIT</span><strong>${grant}</strong></div><div><span>Consortium planning range</span><strong>${partners} organisations</strong></div><p>Assumed CIT eligible budget: ${budget}. Planning scenario, not an award forecast.</p></div><div class="dateband">`);
 s.html=s.html.replace(/<footer>[\s\S]*?<span class="folio">/,`<footer><span>Indicative scenario, assuming project selection. Allocation depends on CIT’s agreed role, eligible costs, consortium agreement and topic conditions. Existing topic source retained in annex; conversion basis: 14 Oct 2026.</span><span class="folio">`);
 s.html=s.html.replace('cit-specific','cit-specific cit-opportunity');return s;
}
const overview=page(5,'CIT technologies and opportunities','Three technologies.<br><span class="blue">Three possible research projects.</span>',`<p class="intro">Connect CIT’s capabilities to a European research challenge.</p><div class="cit-overview">${[
 ['CIT_Glass_Substrate_Official.png','CuFlat PKGCore','Advanced packaging for AI computing','Validate packaging within an energy-efficient data centre project.','HORIZON-CL4-2027-04-DATA-09'],
 ['CIT_ASE_Process_Official.png','Atomic Sputtering Epitaxy','Advanced materials and production','Test a specific materials-substitution case and a route to industrial production.','HORIZON-CL4-2027-01-MAT-PROD-22'],
 ['CIT_Transparent_Antenna_Official.png','Dolphin transparent antenna','Connected immersive devices','Integrate transparent connectivity into a relevant device and use case.','HORIZON-CL4-2027-04-HUMAN-01']
 ].map(([file,name,title,copy,id],i)=>`<article><div class="cit-authentic-image"><img src="asset:${file}" alt="${name}, official CIT image"/></div><span class="eyebrow">0${i+1} · ${name}</span><h3>${title}</h3><p>${copy}</p><span class="cit-topic-ref">${id}</span></article>`).join('')}</div>`,'Images: official CIT product and technology pages. Candidate topic matches require validation against CIT’s evidence and the applicable call.','cit-overview-slide');
const problem=specific(8,10,'The preparation problem','The problem InsightMatches solves.');
problem.html=problem.html.replace(/<p class="intro">[\s\S]*?<\/p>/,'<p class="intro">Finding funding is only the start. Researchers still need to build a team, plan the project and prepare the proposal.</p>');
const community=reuse(11,17);community.html=community.html.replace('</div><div class="community-gallery">','<p class="sponsorship-note">Sponsorship opportunities available.</p></div><div class="community-gallery">');
const next=specific(14,18,'Next steps','Choose an opportunity together.');
next.html=next.html.replace(/<div class="next-step"><span class="num">03<\/span>[\s\S]*?<\/div><\/div>/,'');
next.html=next.html.replace('Select the lead topic','Choose an opportunity');
export const slides=[
page(1,'InsightMatches × Global CIT','Research funding and international partners for Global CIT.',`<div class="cit-cover"><div class="cit-cover-brands"><svg role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg><span>×</span><img src="asset:Global_CIT_Logo_Official.png" alt="Global CIT"/></div><h1>Find research funding.<br>Build an international team.<br><span class="blue">Prepare the proposal.</span></h1><p>We help Global CIT connect its technology with European research opportunities.</p><div class="cit-cover-contact">Paul Conversy · Founder & CEO<br><a href="mailto:info@insightmatches.com">info@insightmatches.com</a></div></div>`,'Prepared for Global CIT · HTML review · November 2026','cit-cover-slide'),
reuse(2,2),reuse(5,3),organisations(),overview,
opportunity(4,6,'AI computing','Advanced packaging for AI computing.','CIT_Glass_Substrate_Official.png','8–12','약 5억–10.5억원','약 7.5억–15억원'),
opportunity(5,7,'Advanced materials','Copper technologies for advanced materials.','CIT_ASE_Process_Official.png','12–20','약 5억–10.5억원','약 7.5억–15억원'),
opportunity(6,8,'Connected devices','Transparent antennas for connected devices.','CIT_Transparent_Antenna_Official.png','8–12','약 4.5억–9억원','약 4.5억–9억원'),
specific(7,9,'Choose an opportunity','Which opportunity should CIT pursue?'),problem,
reuse(6,11),reuse(7,12),reuse(8,13),reuse(12,14),reuse(9,15),reuse(10,16),community,next,
specific(15,19,'Annex · funding amounts','Understanding the funding amounts.'),
specific(16,20,'Annex · sources and conditions','Sources and conditions.')
];
