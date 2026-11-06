import {organisationLogos} from '../deck/organisation-logos.mjs';
import {slides as printed} from '../printed-deck/slides.mjs';
import {slides as original} from './opportunity-source.mjs';
export const count=18;
export const iteration=9;
const logo='<svg class="brand" role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg>';
function page(n,chapter,title,body,note='',classes=''){
 return {n,chapter,title,html:`<section class="slide ${classes}"><header>${logo}<span>${chapter}</span></header><h2>${title}</h2>${body}<footer><span>${note||'InsightMatches × Global CIT · European research opportunities'}</span><span class="folio">${String(n).padStart(2,'0')} / ${count}</span></footer></section>`};
}
function reuse(i,n){const s=printed[i-1];return {...s,n,html:s.html.replace(/\d{2} \/ 13/g,`${String(n).padStart(2,'0')} / ${count}`)}}
function specific(i,n,chapter,title){const s=original[i-1];let content=s.slice(s.indexOf('<h2>'),s.indexOf('<div class="footer">'));if(title)content=content.replace(/<h2>[\s\S]*?<\/h2>/,`<h2>${title}</h2>`);const note=s.match(/<div class="source">([\s\S]*?)<\/div>/)?.[1]||'';return page(n,chapter,title||content.match(/<h2>([\s\S]*?)<\/h2>/)?.[1],content.replace(/^<h2>[\s\S]*?<\/h2>/,''),note,'cit-specific');}
function opportunity(old,n,chapter,title,file,partners,grant,budget){
 const source=specific(old,n,chapter,title).html;
 const intro=source.match(/<p class="intro">([\s\S]*?)<\/p>/)[1];
 const id=source.match(/<div class="call-id">([\s\S]*?)<\/div>/)[1];
 const pills=[...source.matchAll(/<span class="pill">([\s\S]*?)<\/span>/g)].map(m=>m[1]);
 const details=[...source.matchAll(/<h3>([^<]+)<\/h3><p class="body">([\s\S]*?)<\/p>/g)];
 const deadline=source.match(/<div class="dateband"><span>[^<]*<\/span><strong>([^<]+)<\/strong>/)[1];
 const stats=[...source.matchAll(/<div class="metric">([\s\S]*?)<\/div>/g)].map(m=>
  m[1].replace('≈', '약 ').replace('>억</span>', '>억원</span>'));
 return page(n,chapter,title,`<p class="intro">${intro}</p><div class="op-keyfacts"><div class="cit-funding"><span>Indicative EU funding for CIT</span><strong>${grant}</strong></div><div><span>Consortium planning range</span><strong>${partners}</strong><small>organisations</small></div><div><span>Application deadline</span><strong>${deadline}</strong></div></div><div class="op-detail-layout"><div class="op-explanations">${details.map((m,i)=>`<section><span class="op-detail-number">0${i+1}</span><div><h3>${m[1]}</h3><p>${m[2]}</p></div></section>`).join('')}<p class="op-assumption">Assumed CIT eligible budget: ${budget}. Planning scenario, not an award forecast.</p></div><aside class="op-support"><figure><img src="asset:${file}" alt="${file.includes('Concept')?'Concept illustration of AI computing packaging':'Official CIT technology image'}"/><figcaption>${file.includes('Concept')?'AI-generated application concept, not an exact CIT product':'CIT product and technology materials'}</figcaption></figure><div class="op-scope"><div><span>Total topic budget</span><strong>${stats[0]}</strong></div><div><span>EU funding per consortium</span><strong>${stats[1]}</strong></div></div><p class="op-call">${id}</p><p class="op-conditions">${pills.join(' · ')}</p></aside></div>`, 'Indicative scenario, assuming project selection. CIT’s allocation depends on its agreed role, eligible costs, consortium agreement and topic conditions. Fixed conversion basis: 14 Oct 2026.','cit-opportunity-redesign');
}
const connection=page(2,'International research teams','Connect with the expertise<br><span class="blue">your research needs.</span>',`<p class="intro">InsightMatches helps researchers and companies find complementary partners and build international research teams.</p><div class="cit-connection"><div class="connection-copy"><h3>From one technology<br>to a shared research project.</h3><p>Connect CIT’s capabilities with researchers, facilities and industrial partners who bring complementary expertise.</p><div class="connection-outcomes"><span>Find partners</span><span>Build the team</span><span>Develop the proposal</span></div></div><figure><svg viewBox="0 0 740 440" role="img" aria-label="Conceptual illustration of CIT connecting through InsightMatches to universities, research institutes and companies"><g fill="none" stroke="#b6d8e9" stroke-width="2"><path d="M120 220H350L570 90M350 220H590M350 220L570 350"/><path d="M570 90L590 220L570 350" stroke-dasharray="5 8"/></g><circle cx="120" cy="220" r="62" fill="#102238"/><text x="120" y="229" text-anchor="middle" fill="white" font-size="28" font-weight="650">CIT</text><circle cx="350" cy="220" r="82" fill="#eef7fc" stroke="#0284c7" stroke-width="2"/><text x="350" y="228" text-anchor="middle" fill="#0873a5" font-size="20" font-weight="650">InsightMatches</text>${[[570,90,'Universities'],[590,220,'Research institutes'],[570,350,'Companies']].map(([x,y,label])=>`<circle cx="${x}" cy="${y}" r="10" fill="#0284c7"/><text x="${x}" y="${y+39}" text-anchor="middle" fill="#102238" font-size="20">${label}</text>`).join('')}</svg><figcaption>Conceptual illustration of how teams connect.</figcaption></figure></div>`, 'Illustration describes the service, not a measured customer network.','cit-connection-slide');
const overview=page(4,'CIT technologies and opportunities','Connect CIT’s capabilities<br><span class="blue">to EU research challenges.</span>',`<p class="intro">Three technologies. Three possible research projects.</p><div class="cit-overview">${[
 ['CIT_AI_Packaging_Concept_v01.png','CuFlat PKGCore','Advanced packaging for AI computing','Validate packaging within an energy-efficient data centre project.','HORIZON-CL4-2027-04-DATA-09'],
 ['CIT_ASE_Process_Official.png','Atomic Sputtering Epitaxy','Advanced materials and production','Test a specific materials-substitution case and a route to industrial production.','HORIZON-CL4-2027-01-MAT-PROD-22'],
 ['CIT_Transparent_Antenna_Official.png','Dolphin transparent antenna','Connected immersive devices','Integrate transparent connectivity into a relevant device and use case.','HORIZON-CL4-2027-04-HUMAN-01']
 ].map(([file,name,title,copy,id],i)=>`<article><div class="cit-authentic-image"><img src="asset:${file}" alt="${name}, official CIT image"/></div><span class="eyebrow">0${i+1} · ${name}</span><h3>${title}</h3><p>${copy}</p><span class="cit-topic-ref">${id}</span></article>`).join('')}</div>`,'AI packaging is an AI-generated application concept, not an exact CIT product. Other images: official CIT materials. Topic matches require validation.','cit-overview-slide');
const problem=specific(8,10,'The preparation problem','The problem InsightMatches solves.');
problem.html=problem.html.replace(/<p class="intro">[\s\S]*?<\/p>/,'<p class="intro">Finding funding is only the start. Researchers still need to build a team, plan the project and prepare the proposal.</p>');
const community=reuse(11,16);community.html=community.html.replace('</div><div class="community-gallery">','<p class="sponsorship-note">Sponsorship opportunities available.</p></div><div class="community-gallery">');
const next=page(17,'Next steps','Next steps.',`<div class="next-list"><div>${[['01','Sign an NDA','Agree confidentiality before sharing sensitive technical information.'],['02','Share company materials','Provide the company presentation, product information, performance data and current development stage.'],['03','Choose an opportunity','Review technical fit, timing and the partners needed for a credible proposal.']].map(([n,title,copy])=>`<div class="next-step"><span class="num">${n}</span><div><h3>${title}</h3><p>${copy}</p></div></div>`).join('')}</div><div class="contact"><h3>Let’s map the first step.</h3><p class="sp24">Paul Conversy<br>Founder & CEO · InsightMatches</p><a href="mailto:info@insightmatches.com">info@insightmatches.com</a><a href="https://calendar.app.google/ukQe5T1754RKVPedA" data-booking>Book an alignment call ↗</a></div></div>`,'InsightMatches × Global CIT','cit-specific');
const mergedConnection=page(2,'Research partners','Build a research team<br><span class="blue">around CIT’s technology.</span>',`
<p class="intro">Start with what CIT needs to demonstrate, then find the partners who can help prove it.</p>
<div class="connection-story">
  <article><span class="eyebrow">01 · Start with CIT</span><h3>Define the test</h3><p>Identify what CIT’s technology needs to demonstrate in a European research project.</p></article>
  <article><span class="eyebrow">02 · Find complementary expertise</span><h3>Find the right partners</h3><p>Look for labs with the right equipment and companies that can test the technology in use.</p></article>
  <article><span class="eyebrow">03 · Shape the project</span><h3>Agree who does what</h3><p>Define CIT’s role and each partner’s contribution to the joint proposal.</p></article>
</div>
`,'InsightMatches × Global CIT','cit-research-partners');
const citOrganisationLogos = organisationLogos.filter(([, file]) =>
  file !== 'KAIST_Logo_Primary.svg' && file !== 'ECCK_Logo_Primary.png'
);
const organisations=page(13,'Past collaborations','Who we’ve worked with',`
<p class="intro">Selected organisations and collaborative projects.</p>
<div class="cit-partner-grid">${citOrganisationLogos.map(([name, file, dark]) => {
  const caption = name === 'DEEDU' ? name : '';
  return `<figure class="${dark ? 'dark-logo' : ''}"><img src="asset:${file}" alt="${caption ? '' : name}">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}).join('')}</div>
`,'InsightMatches × Global CIT','cit-partner-slide');

const team=reuse(12,12);team.title='The InsightMatches team';team.html=team.html.replace('<h2>Grant experience. AI research. Product engineering.</h2>','<h2>The InsightMatches team</h2>').replace('Practical knowledge of international grants, brought together with reliable technology.','Grant experience. AI research. Product engineering.');
const pricing=reuse(9,14);pricing.html=pricing.html.replace('Converted offers rounded upwards.', 'Prices are approximate conversions.').replace('Be listed.','Be listed.<br>Join existing projects.').replace('Write your own projects.','Create your own project.').replace('Be visible to potential collaborators','Be visible to collaborators and explore existing projects').replace('<section class="slide','<section class="slide cit-pricing');
const proposalCosts = [
  ['Consultancy survey median', 1120, 'benchmark'],
  ['InsightMatches team support', 510, 'team-support'],
];
const proposalScale = 1200;
const costs = page(15, 'Cost comparison', 'About 55% more affordable.', `
<p class="intro">InsightMatches team support costs about 55% less per proposal than the consultancy survey median.</p>
<div class="cit-proposal-comparison">
  <h3>Cost per proposal <span>만원</span></h3>
${proposalCosts.map(([label, amount, style]) => `
  <div class="cit-proposal-row ${style}">
    <div><span>${label}</span><strong>${amount.toLocaleString('en-US')}만원</strong></div>
    <div class="cit-proposal-track" aria-hidden="true"><span style="width:${amount / proposalScale * 100}%"></span></div>
  </div>`).join('')}
  <div class="cit-proposal-axis" aria-hidden="true"><span>0</span><span>400</span><span>800</span><span>1,200</span></div>
</div>
<div class="cit-annual-costs" aria-label="Annual cost benchmarks">
  <article><h3>InsightMatches AI Copilot</h3><p><strong>350만원</strong><span>per year</span></p></article>
  <article><h3>Research Grant Application Manager</h3><p><strong>7,700–9,200만원</strong><span>annual base salary</span></p></article>
</div>
`, 'KRW estimates. Sources: EC consultancy survey and LSE salary benchmark. Employer costs, taxes and success fees excluded.', 'cit-proposal-pricing');

const consortiumBenefits = reuse(5,3);
consortiumBenefits.html = consortiumBenefits.html.replace('약 60억 ~ 150억원', '약 72억–150억원');

const decision = specific(7,8,'Choose an opportunity','Which opportunity should CIT pursue?');
decision.html = decision.html.replace(
  'Deadlines are 17:00 Brussels time.',
  'Deadlines are 17:00 Brussels time (01:00 the following day in Korea).'
);

const researchTime = reuse(8,11);
researchTime.html = researchTime.html.replace(
  '<b>113 hours</b> potentially redirected towards research.',
  'Potential time freed for research: <b>113 hours</b>'
);

export const slides=[
page(1,'InsightMatches × Global CIT','Research funding and international partners for Global CIT.',`<div class="cit-cover"><div class="cit-cover-brands"><svg role="img" aria-label="InsightMatches" viewBox="0 0 2862 786"><use href="#insightmatches-logo"/></svg><span>×</span><img src="asset:Global_CIT_Logo_Official.png" alt="Global CIT"/></div><h1>We help Global CIT connect its technology<br><span class="blue">with European research opportunities.</span></h1><p>Find research funding. Build an international team. Prepare the proposal.</p><div class="cit-cover-contact">Paul Conversy · Founder & CEO<br><a href="mailto:info@insightmatches.com">info@insightmatches.com</a></div></div>`,'Prepared for Global CIT · HTML review · November 2026','cit-cover-slide'),
mergedConnection,consortiumBenefits,overview,
opportunity(4,5,'AI computing','Advanced packaging for AI computing.','CIT_AI_Packaging_Concept_v01.png','8–12','약 5억–10.5억원','약 7.5억–15억원'),
opportunity(5,6,'Advanced materials','Copper technologies for advanced materials.','CIT_ASE_Process_Official.png','12–20','약 5억–10.5억원','약 7.5억–15억원'),
opportunity(6,7,'Connected devices','Transparent antennas for connected devices.','CIT_Transparent_Antenna_Official.png','8–12','약 4.5억–9억원','약 4.5억–9억원'),
decision,
reuse(6,9),reuse(7,10),researchTime,team,organisations,pricing,costs,community,next,
specific(16,18,'Annex · sources and conditions','Sources and conditions.')
];
