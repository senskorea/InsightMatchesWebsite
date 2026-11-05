import {slides as printed} from '../printed-deck/slides.mjs';
import {slides as original} from './opportunity-source.mjs';
export const count=19;
export const iteration=4;
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
 const source=specific(old,n,chapter,title).html;
 const intro=source.match(/<p class="intro">([\s\S]*?)<\/p>/)[1];
 const id=source.match(/<div class="call-id">([\s\S]*?)<\/div>/)[1];
 const pills=[...source.matchAll(/<span class="pill">([\s\S]*?)<\/span>/g)].map(m=>m[1]);
 const details=[...source.matchAll(/<h3>([^<]+)<\/h3><p class="body">([\s\S]*?)<\/p>/g)];
 const deadline=source.match(/<div class="dateband"><span>[^<]*<\/span><strong>([^<]+)<\/strong>/)[1];
 const stats=[...source.matchAll(/<div class="metric">([\s\S]*?)<\/div>/g)].map(m=>m[1]);
 return page(n,chapter,title,`<p class="intro">${intro}</p><div class="op-keyfacts"><div class="cit-funding"><span>Indicative EU funding for CIT</span><strong>${grant}</strong></div><div><span>Consortium planning range</span><strong>${partners}</strong><small>organisations</small></div><div><span>Application deadline</span><strong>${deadline}</strong></div></div><div class="op-detail-layout"><div class="op-explanations">${details.map((m,i)=>`<section><span class="op-detail-number">0${i+1}</span><div><h3>${m[1]}</h3><p>${m[2]}</p></div></section>`).join('')}<p class="op-assumption">Assumed CIT eligible budget: ${budget}. Planning scenario, not an award forecast.</p></div><aside class="op-support"><figure><img src="asset:${file}" alt="Official CIT ${chapter.toLowerCase()} technology image"/><figcaption>CIT product and technology materials</figcaption></figure><div class="op-scope"><div><span>Total topic budget</span><strong>${stats[0]}</strong></div><div><span>EU funding per consortium</span><strong>${stats[1]}</strong></div></div><p class="op-call">${id}</p><p class="op-conditions">${pills.join(' · ')}</p></aside></div>`, 'Indicative scenario, assuming project selection. CIT’s allocation depends on its agreed role, eligible costs, consortium agreement and topic conditions. Fixed conversion basis: 14 Oct 2026.','cit-opportunity-redesign');
}
const connection=page(2,'International research teams','Connect with the expertise<br><span class="blue">your research needs.</span>',`<p class="intro">InsightMatches helps researchers and companies find complementary partners and build international research teams.</p><div class="cit-connection"><div class="connection-copy"><h3>From one technology<br>to a shared research project.</h3><p>Connect CIT’s capabilities with researchers, facilities and industrial partners who bring complementary expertise.</p><div class="connection-outcomes"><span>Find partners</span><span>Build the team</span><span>Develop the proposal</span></div></div><figure><svg viewBox="0 0 740 440" role="img" aria-label="Conceptual illustration of CIT connecting through InsightMatches to universities, research institutes and companies"><g fill="none" stroke="#b6d8e9" stroke-width="2"><path d="M120 220H350L570 90M350 220H590M350 220L570 350"/><path d="M570 90L590 220L570 350" stroke-dasharray="5 8"/></g><circle cx="120" cy="220" r="62" fill="#102238"/><text x="120" y="229" text-anchor="middle" fill="white" font-size="28" font-weight="650">CIT</text><circle cx="350" cy="220" r="82" fill="#eef7fc" stroke="#0284c7" stroke-width="2"/><text x="350" y="228" text-anchor="middle" fill="#0873a5" font-size="20" font-weight="650">InsightMatches</text>${[[570,90,'Universities'],[590,220,'Research institutes'],[570,350,'Companies']].map(([x,y,label])=>`<circle cx="${x}" cy="${y}" r="10" fill="#0284c7"/><text x="${x}" y="${y+39}" text-anchor="middle" fill="#102238" font-size="20">${label}</text>`).join('')}</svg><figcaption>Conceptual illustration of how teams connect.</figcaption></figure></div>`, 'Illustration describes the service, not a measured customer network.','cit-connection-slide');
const overview=page(5,'CIT technologies and opportunities','Three technologies.<br><span class="blue">Three possible research projects.</span>',`<p class="intro">Connect CIT’s capabilities to a European research challenge.</p><div class="cit-overview">${[
 ['CIT_Glass_Substrate_Official.png','CuFlat PKGCore','Advanced packaging for AI computing','Validate packaging within an energy-efficient data centre project.','HORIZON-CL4-2027-04-DATA-09'],
 ['CIT_ASE_Process_Official.png','Atomic Sputtering Epitaxy','Advanced materials and production','Test a specific materials-substitution case and a route to industrial production.','HORIZON-CL4-2027-01-MAT-PROD-22'],
 ['CIT_Transparent_Antenna_Official.png','Dolphin transparent antenna','Connected immersive devices','Integrate transparent connectivity into a relevant device and use case.','HORIZON-CL4-2027-04-HUMAN-01']
 ].map(([file,name,title,copy,id],i)=>`<article><div class="cit-authentic-image"><img src="asset:${file}" alt="${name}, official CIT image"/></div><span class="eyebrow">0${i+1} · ${name}</span><h3>${title}</h3><p>${copy}</p><span class="cit-topic-ref">${id}</span></article>`).join('')}</div>`,'Images: official CIT product and technology pages. Candidate topic matches require validation against CIT’s evidence and the applicable call.','cit-overview-slide');
const problem=specific(8,10,'The preparation problem','The problem InsightMatches solves.');
problem.html=problem.html.replace(/<p class="intro">[\s\S]*?<\/p>/,'<p class="intro">Finding funding is only the start. Researchers still need to build a team, plan the project and prepare the proposal.</p>');
const community=reuse(11,17);community.html=community.html.replace('</div><div class="community-gallery">','<p class="sponsorship-note">Sponsorship opportunities available.</p></div><div class="community-gallery">');
const next=specific(14,18,'Next steps','Next steps.');
next.html=next.html.replace(/<div class="next-step"><span class="num">03<\/span>[\s\S]*?<\/div><\/div>/,'');
next.html=next.html.replace('Select the lead topic','Choose an opportunity');
export const slides=[
page(1,'InsightMatches × Global CIT','Research funding and international partners for Global CIT.',`<div class="cit-cover"><div class="cit-cover-brands"><svg role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg><span>×</span><img src="asset:Global_CIT_Logo_Official.png" alt="Global CIT"/></div><h1>We help Global CIT connect its technology<br><span class="blue">with European research opportunities.</span></h1><p>Find research funding. Build an international team. Prepare the proposal.</p><div class="cit-cover-contact">Paul Conversy · Founder & CEO<br><a href="mailto:info@insightmatches.com">info@insightmatches.com</a></div></div>`,'Prepared for Global CIT · HTML review · November 2026','cit-cover-slide'),
connection,reuse(5,3),organisations(),overview,
opportunity(4,6,'AI computing','Advanced packaging for AI computing.','CIT_Glass_Substrate_Official.png','8–12','약 5억–10.5억원','약 7.5억–15억원'),
opportunity(5,7,'Advanced materials','Copper technologies for advanced materials.','CIT_ASE_Process_Official.png','12–20','약 5억–10.5억원','약 7.5억–15억원'),
opportunity(6,8,'Connected devices','Transparent antennas for connected devices.','CIT_Transparent_Antenna_Official.png','8–12','약 4.5억–9억원','약 4.5억–9억원'),
specific(7,9,'Choose an opportunity','Which opportunity should CIT pursue?'),problem,
reuse(6,11),reuse(7,12),reuse(8,13),reuse(12,14),reuse(9,15),reuse(10,16),community,next,
specific(16,19,'Annex · sources and conditions','Sources and conditions.')
];
