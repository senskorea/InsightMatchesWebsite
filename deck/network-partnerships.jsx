import React,{useState} from 'react';
const partners=[
 ['synapse-partnership.png','Synapse International','Connecting Korean and Japanese deep tech with European research opportunities.'],
 ['phihub-partnership.png','Phi Hub','Connecting African HealthTech with Korean technology networks and European research partners.']
];
const hubs=[[205,155],[735,155],[205,455],[735,455]];
const nodes=hubs.flatMap(([cx,cy],group)=>Array.from({length:7},(_,i)=>{const a=i*Math.PI*2/7;return {x:cx+88*Math.cos(a),y:cy+72*Math.sin(a),group}}));
export default function NetworkPartnerships({reveal=false}){
 const [paused,setPaused]=useState(false);
 return <section className="network-partnerships">
  <header><h1>One connection.<br/>Whole new networks.</h1><h2>Connect with InsightMatches. Reach into other research communities.</h2><p>We bring together organisations that support researchers and startups in different countries. Each relationship opens a route to more expertise, potential partners and research opportunities.</p><p>You’re not just finding one contact. You’re connecting with a wider network.</p></header>
  <div className="partnership-overlay-area">
   <svg className="network-graph" viewBox="0 0 940 620" role="img" aria-label="Illustration of connected research communities, with many connections within and between networks">
    {nodes.map((n,i)=>{const next=nodes[n.group*7+(i+2)%7],across=nodes[(i+9)%nodes.length];return <g key={i}><path d={`M${n.x} ${n.y}L${next.x} ${next.y}`} stroke="#cddde6" strokeWidth="2"/><path d={`M${n.x} ${n.y}Q470 310 ${across.x} ${across.y}`} fill="none" stroke="#079fe3" strokeOpacity=".18" strokeWidth="1.8"/></g>})}
    {hubs.map(([x,y],i)=><g key={i}><path d={`M${x} ${y}L470 310`} stroke="#079fe3" strokeWidth="3"/>{nodes.filter(n=>n.group===i).map((n,j)=><path key={j} d={`M${x} ${y}L${n.x} ${n.y}`} stroke="#8bc8e5" strokeWidth="2"/>)}<circle cx={x} cy={y} r="17" fill="#079fe3"/></g>)}
    {nodes.map((n,i)=><circle key={i} cx={n.x} cy={n.y} r={i%3===0?9:6} fill={i%3===0?'#13202d':'#079fe3'} stroke="white" strokeWidth="3"/>)}
    <rect x="350" y="272" width="240" height="76" rx="38" fill="white" stroke="#079fe3" strokeWidth="2"/><text x="470" y="320" textAnchor="middle" fontSize="29" fontWeight="600">InsightMatches</text>
    <text x="470" y="590" textAnchor="middle" fontSize="21" fill="#64717c">Illustration of network reach, not measured connections.</text>
   </svg>
   {reveal&&<><button className="partnership-motion-control" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'Resume motion':'Pause motion'}</button>
   <div className={'partnership-evidence '+(paused?'is-paused':'')}>
    {partners.map(([file,name,copy])=><figure key={file}><a href={'/deck-assets/'+file} target="_blank" rel="noreferrer"><img src={'/deck-assets/'+file} alt={name+' partnership announcement'}/></a><figcaption><strong>{name}</strong><p>{copy}</p></figcaption></figure>)}
   </div></>}
  </div>
 </section>;
}
