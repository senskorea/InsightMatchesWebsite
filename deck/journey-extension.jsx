import React,{useState} from 'react';
import EUFunding from './eu-funding.jsx';
import ClusterProfiles from './cluster-profiles.jsx';
import PreparationArt from './preparation-art.jsx';
const labels=['Find funding','Develop the idea','Build the team','Plan the project','Prepare the draft'];
const stageSummaries=[
 ['20 hours','illustrative search estimate'],
 ['One clear idea','qualitative step'],
 ['16 partners','Pillar II mean · organisations'],
 ['40 hours','illustrative planning estimate'],
 ['60 hours','illustrative drafting estimate']
];
const stageFacts=[
 {headline:'≈5,000 PAGES.',detail:'500 calls × 10 pages per call',note:'Founder’s estimate of annual EU call material. Not a verified count or the reading required of every researcher.'},
 {headline:'ONE CLEAR IDEA.',detail:'A research question. A convincing fit with the call.',note:'A qualitative step, not a measured statistic. No universal time estimate asserted.'},
 {headline:'16 PARTNERS.',detail:'mean consortium size · Horizon Europe Pillar II',note:'European Commission interim evaluation, 2025. Partner organisations, not people or separate teams.',source:'https://research-and-innovation.ec.europa.eu/document/download/a3aa9b90-15c0-4ea7-b25e-9f4e29cfa740_en'},
 {headline:'40 HOURS.',detail:'to plan the project',note:'Founder’s estimate: work packages, responsibilities and budgets.'},
 {headline:'60 HOURS.',detail:'to prepare the draft',note:'Founder’s estimate of drafting time, not a measured average.'}
];
function PreparationOverview(){
 const [active,setActive]=useState(null);
 const fact=active===null?null:stageFacts[active];
 return <section className="preparation-overview" aria-label="Explore the five preparation stages">
  <header className="preparation-headline" aria-live="polite" aria-atomic="true">
   <span className="preparation-kicker">{active===null?'Five connected tasks. One proposal.':labels[active]}</span>
   <h2>{fact?.headline??'Before the research, the preparation.'}</h2>
   <p>{fact?.detail??'Hover over a stage to explore what it takes.'}</p>
  </header>
  <div className="preparation-stages" onMouseLeave={()=>setActive(null)}>
   {labels.map((label,i)=><button key={label} type="button" aria-pressed={active===i} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(i)} onBlur={()=>setActive(null)} onClick={()=>setActive(i)} className={active===i?'is-active':''}>
    <PreparationArt i={i} overview/>
    <span className="preparation-step">0{i+1}</span><span>{label}</span>
    <strong className="preparation-stat">{stageSummaries[i][0]}</strong><span className="preparation-stat-basis">{stageSummaries[i][1]}</span>
   </button>)}
  </div>
  <p className="preparation-source" style={{visibility:fact?'visible':'hidden'}}>{fact?.note??'Five connected tasks. Each depends on the work that came before.'} {fact?.source&&<a href={fact.source} target="_blank" rel="noreferrer">Source ↗</a>}</p>
 </section>;
}
export function PillarMean(){return <svg viewBox="0 0 940 620" role="img" aria-label="Horizon Europe Pillar II: mean 16 partner organisations per consortium">
 <text x="130" y="150" className="svg-small">HORIZON EUROPE · PILLAR II</text><text x="130" y="220" className="svg-metric">16 partners</text>
 <rect x="130" y="250" width="512" height="45" fill="#079fe3" opacity=".15"/><path d="M130 360 H770" stroke="#d8dfe4"/>
 {[0,4,8,12,16,20].map(n=><g key={n}><path d={'M'+(130+n*32)+' 354 v12'} stroke="#13202d"/><text x={130+n*32} y="395" textAnchor="middle" className="svg-small">{n}</text></g>)}
 <path d="M642 240 V340" stroke="#13202d" strokeWidth="2"/><text x="642" y="445" textAnchor="middle" className="svg-label">Mean</text><text x="130" y="525" className="svg-small">Partner organisations per consortium, not individual researchers.</text>
 <text x="130" y="560" className="svg-small">A box plot needs median, quartiles and range; these are not inferred.</text></svg>}
export function Collaborators(){return <div className="collaborator-stickers">
 {[['Matti Douy','Hydrogen mobility','25 515 460 325'],['Daniel Enebeli','Circular economy','850 515 440 325']].map(([name,topic,viewBox])=><figure key={name}><svg viewBox={viewBox} role="img" aria-label={name+' original project portrait'}><image href="/deck-assets/entrepreneurs-original.png" width="1672" height="941"/></svg><figcaption><strong>{name}</strong><span>{topic}</span></figcaption></figure>)}
 </div>}
export function ProductScreens(){return <svg viewBox="0 0 940 620" role="img" aria-label="Actual InsightMatches demo screens: funding, partners and proposal writing">
 {[['funding.jpg','Find the fit',55,80,450,255],['partners.jpg','Connect expertise',410,165,450,255],['writing.jpg','Develop the draft',190,340,420,190]].map(([file,label,x,y,w,h])=><g key={file}><rect x={x-7} y={y-29} width={w+14} height={h+36} rx="5" fill="white" stroke="#d8dfe4"/><text x={x+8} y={y-10} className="svg-small">{label}</text><image href={'/deck-assets/'+file} x={x} y={y} width={w} height={h} preserveAspectRatio="xMidYMid meet"/></g>)}
 <text x="470" y="605" textAnchor="middle" className="svg-small">Actual interface · local demo data · October 2026</text></svg>}
export function ExtraScene({kind}){
 if(kind===-4)return <section className="network-partnerships"><header><h1>One connection.<br/>Whole new networks.</h1><h2>Connect with InsightMatches. Reach into other research communities.</h2><p>We bring together organisations that support researchers and startups in different countries. Each relationship opens a route to more expertise, potential partners and research opportunities.</p><p>You’re not just finding one contact. You’re connecting with a wider network.</p></header><div className="partnership-evidence">{[['synapse-partnership.png','Synapse International','Connecting Korean and Japanese deep tech with European research opportunities.'],['phihub-partnership.png','Phi Hub','Connecting African HealthTech with Korean technology networks and European research partners.']].map(([file,name,copy])=><figure key={file}><a href={'/deck-assets/'+file} target="_blank" rel="noreferrer"><img src={'/deck-assets/'+file} alt={name+' partnership announcement'}/></a><figcaption><strong>{name}</strong><p>{copy}</p></figcaption></figure>)}</div></section>;
 if(kind===-2)return <ClusterProfiles/>;
 if(kind===-5)return <EUFunding/>;
 if(kind===-3)return <PreparationOverview/>;
 if(kind===-5)return <svg viewBox="0 0 940 620" role="img" aria-label="Funding budget examples, approximate USD: Horizon Europe 104.7 billion over 2021 to 2027; Korean government research and development 26.6 billion in 2026. Converted at ECB rates of 14 October 2026. Not available grant balances.">
 <text x="90" y="100" className="svg-small">EUROPE · HORIZON EUROPE</text>
 <text x="90" y="175" className="svg-metric">≈ $104.7 billion</text>
 <text x="90" y="215" className="svg-label">Programme budget · 2021–2027</text>
 <path d="M90 255 H840" stroke="#d8dfe4"/>
 <text x="90" y="310" className="svg-small">KOREA · GOVERNMENT R&amp;D</text>
 <text x="90" y="385" className="svg-metric" fill="#079fe3">≈ $26.6 billion</text>
 <text x="90" y="425" className="svg-label">Annual budget · 2026</text>
 <text x="90" y="575" className="svg-small">USD · ECB rates, 14 Oct 2026 · budgets, not grants currently open.</text>
 </svg>;
 return <svg viewBox="0 0 940 620" role="img" aria-label={kind===-1?'InsightMatches special edition dot logo':kind===-2?'Rotating globe alongside collaborator portraits':kind===-3?'Five stages of grant preparation':'Hypothetical Korean and European collaboration network'}>
 {kind===-1&&<><image className="cover-logo-reveal" href="/deck-assets/insightmatches-original.png" x="40" y="110" width="860" height="236" preserveAspectRatio="xMidYMid meet"/><text x="470" y="405" textAnchor="middle" className="cover-positioning"><tspan x="470">We help researchers find funding,</tspan><tspan x="470" dy="55">build teams and turn ideas into proposals.</tspan></text><text x="470" y="515" textAnchor="middle" className="svg-label">Powered by agentic AI.</text></>}
 {kind===-3&&<><image href="/deck-assets/preparation-line-art.png" x="20" y="90" width="900" height="300" preserveAspectRatio="xMidYMid meet"/><path d="M110 430 H830" stroke="#d8dfe4"/>{labels.map((s,i)=><text key={s} x={110+i*180} y="480" textAnchor="middle" className="svg-label">{s}</text>)}</>}
 {kind===-4&&<>{Array.from({length:20},(_,i)=><path key={'k'+i} d={'M'+(95+i%4*40)+' '+(145+Math.floor(i/4)*62)+' L470 270'} stroke="#d8dfe4" fill="none"/>)}{Array.from({length:15},(_,i)=><path key={'e'+i} d={'M470 270 L'+(710+i%3*45)+' '+(145+Math.floor(i/3)*62)} stroke="#b9e2f4" fill="none"/>)}<rect x="395" y="230" width="150" height="80" rx="40" fill="white" stroke="#079fe3"/><text x="470" y="277" textAnchor="middle" className="svg-label">InsightMatches</text><text x="155" y="95" textAnchor="middle" className="svg-label">20 Korean teams</text><text x="755" y="95" textAnchor="middle" className="svg-label">15 European organisations</text><text x="470" y="520" textAnchor="middle" className="svg-metric">300 possible pairings</text><text x="470" y="565" textAnchor="middle" className="svg-small">Illustrative network potential. Relevant matches still require fit and consent.</text></>}
 </svg>
}
