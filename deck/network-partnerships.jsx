import React,{useState} from 'react';
const partners=[
 ['synapse-partnership.png','Synapse International','Connecting Korean and Japanese deep tech with European research opportunities.'],
 ['phihub-partnership.png','Phi Hub','Connecting African HealthTech with Korean technology networks and European research partners.']
];
export default function NetworkPartnerships({reveal=false}){
 const [paused,setPaused]=useState(false);
 return <section className="network-partnerships">
  <header><h1>One connection.<br/>Whole new networks.</h1><h2>Connect with InsightMatches. Reach into other research communities.</h2><p>We bring together organisations that support researchers and startups in different countries. Each relationship opens a route to more expertise, potential partners and research opportunities.</p><p>You’re not just finding one contact. You’re connecting with a wider network.</p></header>
  <div className="partnership-overlay-area">
   <svg className="network-graph" viewBox="0 0 940 620" role="img" aria-label="Illustrative network connecting 20 teams with 15 organisations through InsightMatches">
    {Array.from({length:35},(_,i)=>{const left=i<20,j=left?i:i-20,x=left?95+j%4*40:710+j%3*45,y=145+Math.floor(j/(left?4:3))*62;return <g key={i}><path d={`M${x} ${y}L470 270`} stroke={left?'#d8dfe4':'#b9e2f4'}/><circle cx={x} cy={y} r="6" fill={left?'#13202d':'#079fe3'}/></g>})}
    <rect x="375" y="230" width="190" height="80" rx="40" fill="white" stroke="#079fe3"/><text x="470" y="278" textAnchor="middle" fontSize="26">InsightMatches</text>
    <text x="160" y="90" textAnchor="middle" fontSize="28">20 teams</text><text x="755" y="90" textAnchor="middle" fontSize="28">15 organisations</text>
    <text x="470" y="520" textAnchor="middle" fontSize="46" fontWeight="700">300 possible pairings</text><text x="470" y="570" textAnchor="middle" fontSize="22">Example network, not partnerships achieved.</text>
   </svg>
   {reveal&&<><button className="partnership-motion-control" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'Resume motion':'Pause motion'}</button>
   <div className={'partnership-evidence '+(paused?'is-paused':'')}>
    {partners.map(([file,name,copy])=><figure key={file}><a href={'/deck-assets/'+file} target="_blank" rel="noreferrer"><img src={'/deck-assets/'+file} alt={name+' partnership announcement'}/></a><figcaption><strong>{name}</strong><p>{copy}</p></figcaption></figure>)}
   </div></>}
  </div>
 </section>;
}
