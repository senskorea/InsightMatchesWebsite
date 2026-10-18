import React,{useState} from 'react';
import {motion} from 'framer-motion';
const programmes=[
 ['Horizon Europe',93.5,'2021–2027','Research and innovation','Includes ERC, MSCA, Pillar II, EIC and EIT; these are not additional budgets.','https://commission.europa.eu/funding-and-tenders/find-funding/eu-funding-programmes/horizon-europe_en'],
 ['Erasmus+',26.2,'2021–2027','Education and academic cooperation','Mobility, skills and institutional partnerships; not a general research grant programme.','https://www.consilium.europa.eu/en/policies/erasmus-plus-programme/'],
 ['Digital Europe',8.1,'2021–2027','Digital deployment and capacity','AI, computing, cybersecurity and advanced digital skills; deployment rather than basic research.','https://digital-strategy.ec.europa.eu/en/activities/digital-programme'],
 ['LIFE',5.432,'2021–2027','Environment and climate action','Demonstration, implementation and environmental solutions; not all expenditure is research.','https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/programmes/life2027'],
 ['EU4Health',4.4,'2021–2027','Health systems and implementation','Public-health action and health-system resilience; complements research funding.','https://health.ec.europa.eu/funding/eu4health-programme-2021-2027-vision-healthier-european-union_en'],
 ['Interreg',10.1,'2021–2027','Cross-border and regional cooperation','Commission estimate across 86 programmes. Includes ERDF support; do not add to the ERDF envelope. Not exclusively research.','https://enlargement.ec.europa.eu/news/eu-cohesion-policy-over-eu530-million-territorial-cooperation-including-ukraine-and-moldova-2021-2022-12-02_en'],
 ['Euratom',.330,'2026–2027 work programme','Nuclear research and training','Work-programme allocation only, not the entire multiannual Euratom envelope.','https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/euratom-research-and-training-programme_en'],
 ['European Defence Fund',7.3,'2021–2027','Collaborative defence R&D','Approximate envelope reported by the Commission. Specialised eligibility and security restrictions apply.','https://defence-industry-space.ec.europa.eu/eu-defence-industry/european-defence-fund-edf-official-webpage-european-commission_en'],
 ['ERDF',226.05,'2021–2027','Regional research and innovation','Whole fund, not a research-only budget. Managed regionally; overlaps with Interreg funding.','https://commission.europa.eu/funding-and-tenders/find-funding/eu-funding-programmes/european-regional-development-fund-erdf_en'],
 ['Innovation Fund',40,'2020–2030','Low-carbon technology demonstration','Conditional estimate at a carbon price of EUR 75/tCO₂. Actual funding depends on ETS revenues; not a fixed appropriation.','https://climate.ec.europa.eu/areas-action/eu-funding-climate-action/innovation-fund/what-innovation-fund_en']
];
const usd=eur=>eur<1?'≈ $'+Math.round(eur*1.1195*1000)+' million':'≈ $'+(eur*1.1195).toFixed(1)+' billion';
const wheelLabels=[['Horizon','Europe'],['Erasmus+'],['Digital','Europe'],['LIFE'],['EU4Health'],['Interreg'],['Euratom'],['EDF'],['ERDF'],['Innovation','Fund']];
// Shared 2021–27 envelopes only. Exclude Interreg overlap and unlike periods.
const subtotal=programmes.reduce((sum,[name,eur])=>['Interreg','Euratom','Innovation Fund'].includes(name)?sum:sum+eur,0)*1.1195;
export default function EUFunding(){
 const [selected,setSelected]=useState(null);
 const [name,eur,period,purpose,note,url]=selected===null?[]:programmes[selected];
 return <section className="eu-funding eu-funding-pie" aria-label="EU research and related funding programmes">
 <div className="funding-wheel" onMouseLeave={()=>setSelected(null)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setSelected(null)}}><motion.svg layoutId="research-funding-wheel" transition={{duration:.8,ease:[.22,1,.36,1]}} viewBox="0 0 600 600" aria-label="Ten equal programme selectors, not proportional budget shares">
 {programmes.map(([label,budget],i)=>{const a=(i*36-90)*Math.PI/180,b=((i+1)*36-90)*Math.PI/180,m=(a+b)/2;return <g key={label}>
 <path d={'M300 300 L'+(300+250*Math.cos(a))+' '+(300+250*Math.sin(a))+' A250 250 0 0 1 '+(300+250*Math.cos(b))+' '+(300+250*Math.sin(b))+' Z'} fill={selected===i?'#079fe3':['#d8e2e9','#cbdbe4','#c1d2de','#b3c8d5','#a6bfce','#99b5c7','#8cabbf','#7fa1b7','#7297af','#648aa3'][i]} stroke="white" strokeWidth="4" role="button" tabIndex="0" aria-label={label+', '+usd(budget)} aria-pressed={selected===i} onMouseEnter={()=>setSelected(i)} onFocus={()=>setSelected(i)} onClick={()=>setSelected(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(i)}}}/>
 <text x={300+205*Math.cos(m)} y={300+205*Math.sin(m)-(wheelLabels[i].length-1)*8+5} textAnchor="middle" fill="#13202d" fontSize="13" fontWeight="600" pointerEvents="none">{wheelLabels[i].map((line,j)=><tspan key={line} x={300+205*Math.cos(m)} dy={j?16:0}>{line}</tspan>)}</text></g>})}
 <circle cx="300" cy="300" r="112" fill="white"/><text x="300" y="272" textAnchor="middle" className="svg-small">SELECTED EU BUDGETS</text><text x="300" y="320" textAnchor="middle" style={{fontSize:43,fontWeight:700,fill:'#13202d',letterSpacing:-2}}>≈ ${Math.round(subtotal)}bn</text><text x="300" y="351" textAnchor="middle" className="svg-small">2021–2027 · USD</text>
 </motion.svg><p className="eu-funding-note">Equal segments are navigation—not budget shares.</p></div>
  <div className="eu-funding-detail" aria-live="polite">
   <span className="funding-eyebrow">Research and collaboration</span>
   <h1 className="eu-funding-name">{name??'Your pathway to EU funds.'}</h1>
   <h2 className="funding-amount">{selected===null?'≈ $'+Math.round(subtotal)+' billion':usd(eur)}</h2>
   <p className="funding-period">{selected===null?'Selected programme budgets':name==='Euratom'?'Work-programme budget':name==='Innovation Fund'?'Conditional funding estimate':'Programme envelope'} · {period??'2021–2027'}</p>
   <div className="funding-description"><h3>{purpose??'Our focus is European funding.'}</h3><p className="eu-funding-note">{note??'Find the right programme for your research, with Horizon Europe at the heart of our work.'}</p></div>
   {url&&<a href={url} target="_blank" rel="noreferrer">Programme and funding information ↗</a>}
  </div>
  <details className="funding-caveat"><summary>Budget scope &amp; sources</summary><p>Full programme envelopes, not remaining or open funding. Centre totals seven 2021–27 budgets, including non-research spending; excludes Interreg overlap, Euratom and Innovation Fund. USD conversion: EUR 1 = $1.1195, ECB 14 Oct 2026. Selected programme source linked above.</p></details>
 </section>;
}
