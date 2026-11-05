import {slides as printed} from '../printed-deck/slides.mjs';
import {slides as original} from './opportunity-source.mjs';
export const count=21;
export const iteration=2;
const logo='<svg class="brand" role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg>';
function page(n,chapter,title,body,note='',classes=''){
 return {n,chapter,title,html:`<section class="slide ${classes}"><header>${logo}<span>${chapter}</span></header><h2>${title}</h2>${body}<footer><span>${note||'InsightMatches × Global CIT · European research opportunities'}</span><span class="folio">${String(n).padStart(2,'0')} / ${count}</span></footer></section>`};
}
function reuse(i,n){const s=printed[i-1];return {...s,n,html:s.html.replace(/\d{2} \/ 13/g,`${String(n).padStart(2,'0')} / ${count}`)}}
function specific(i,n,chapter,title){const s=original[i-1];let content=s.slice(s.indexOf('<h2>'),s.indexOf('<div class="footer">'));if(title)content=content.replace(/<h2>[\s\S]*?<\/h2>/,`<h2>${title}</h2>`);const note=s.match(/<div class="source">([\s\S]*?)<\/div>/)?.[1]||'';return page(n,chapter,title||content.match(/<h2>([\s\S]*?)<\/h2>/)?.[1],content.replace(/^<h2>[\s\S]*?<\/h2>/,''),note,'cit-specific');}
export const slides=[
page(1,'InsightMatches × Global CIT','Research funding and international partners for Global CIT.',`<div class="cit-cover"><div class="cit-cover-brands"><svg role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg><span>×</span><img src="asset:Global_CIT_Logo_Official.png" alt="Global CIT"/></div><h1>Find research funding.<br>Build an international team.<br><span class="blue">Prepare the proposal.</span></h1><p>We help Global CIT connect its technology with European research opportunities.</p><div class="cit-cover-contact">Paul Conversy · Founder & CEO<br><a href="mailto:info@insightmatches.com">info@insightmatches.com</a></div></div>`,'Prepared for Global CIT · HTML review · November 2026','cit-cover-slide'),
reuse(2,2),reuse(5,3),reuse(4,4),
specific(2,5,'CIT technologies','Three CIT technologies.<br><span class="blue">Three starting points.</span>'),
specific(3,6,'Three funding options','Three funding options for CIT.'),
specific(4,7,'AI computing','Advanced packaging for AI computing.'),
specific(5,8,'Advanced materials','Copper technologies for advanced materials.'),
specific(6,9,'Connected devices','Transparent antennas for connected devices.'),
specific(7,10,'Choose an opportunity','Which opportunity should CIT pursue first?'),
specific(8,11,'Preparing a proposal','One proposal. A lot of preparation.'),
reuse(6,12),reuse(7,13),reuse(8,14),reuse(12,15),reuse(9,16),reuse(10,17),reuse(11,18),
specific(14,19,'Next steps','Choose the first opportunity together.'),
specific(15,20,'Annex · funding amounts','Understanding the funding amounts.'),
specific(16,21,'Annex · sources and conditions','Sources and conditions.')
];
