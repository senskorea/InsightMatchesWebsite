import React,{useState,useEffect} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
const partners=[
 ['synapse-partnership.png','Synapse International','Connecting Korean and Japanese deep tech with European research opportunities.'],
 ['phihub-partnership.png','Phi Hub','Connecting African HealthTech with Korean technology networks and European research partners.']
];
const continents=['Europe','Asia','Africa','North America'];
const hubs=[[205,155],[735,155],[205,455],[735,455]];
const nodes=Array.from({length:240},(_,i)=>{
 const group=Math.floor(i/60),j=i%60,a=j*Math.PI*(3-Math.sqrt(5)),radius=22+78*Math.sqrt(j/59);
 const [cx,cy]=hubs[group];
 return {x:cx+radius*Math.cos(a),y:cy+radius*.8*Math.sin(a),group};
});
function globePoint(i,angle){
 const y=1-2*(i+.5)/nodes.length,r=Math.sqrt(1-y*y),a=i*Math.PI*(3-Math.sqrt(5))+angle,z=r*Math.cos(a);
 return {cx:470+245*r*Math.sin(a),cy:300+245*y,r:2.2+(z+1)*1.1,opacity:.18+(z+1)*.37,fill:z>.3?'#079fe3':'#13202d'};
}
export default function NetworkPartnerships({reveal=false,globe=false}){
 const [paused,setPaused]=useState(false),[angle,setAngle]=useState(0),reduced=useReducedMotion();
 useEffect(()=>{
  if(!globe||paused||reduced)return;
  const id=setInterval(()=>{if(!document.hidden)setAngle(v=>v+.012)},50);
  return()=>clearInterval(id);
 },[globe,paused,reduced]);
 const transition={duration:reduced?0:globe?.22:1.8,ease:[.22,1,.36,1]};
 return <section className="network-partnerships">
  <header>{globe?<><h1>A world of<br/>researchers.</h1><h2><span className="network-metric">About 12 million</span>researchers worldwide.</h2><p>Working on some of the world’s most pressing problems, from health and climate to energy and food.</p><small className="network-source">Approximate 2023 research workforce in full-time equivalents. Based on UNESCO UIS: 1,486 per million people × approximately 8.1 billion people.</small></>:<><h1>Research crosses<br/>borders.</h1><h2>Different continents. Complementary expertise.</h2><p>Researchers connect across countries to share knowledge, facilities and ideas, and tackle challenges together.</p><p>InsightMatches helps connect that expertise with research partners and funding opportunities.</p><small className="network-source">International co-authorship in OECD countries rose from 22% in 2013 to 27% in 2023. OECD Science, Technology and Innovation Outlook 2025.</small></>}</header>
  <div className="partnership-overlay-area">
   <svg className="network-graph" viewBox="0 0 940 620" role="img" aria-label={globe?'Rotating globe of research communities':'Globe particles connected into four research communities'}>
    <motion.g animate={{opacity:globe?1:0}} transition={{duration:reduced?0:.7}} fill="none" stroke="#dce6ec" strokeWidth="1.4">
     <circle cx="470" cy="300" r="245"/><ellipse cx="470" cy="300" rx="100" ry="245"/><ellipse cx="470" cy="300" rx="195" ry="245"/><ellipse cx="470" cy="300" rx="245" ry="85"/><ellipse cx="470" cy="300" rx="245" ry="175"/>
    </motion.g>
    <motion.g initial={false} animate={{opacity:globe?0:1}} transition={{duration:reduced?0:1.1,delay:reduced||globe?0:.8}}>
     {hubs.map(([x,y],i)=><g key={i}><motion.path d={`M${x} ${y}Q470 310 470 310`} fill="none" stroke="#079fe3" strokeWidth="2.5" animate={{pathLength:globe?0:1}} transition={{duration:reduced?0:1.3,delay:reduced||globe?0:1}}/>{nodes.filter((n,j)=>n.group===i&&j%5===0).map((n,j)=><path key={j} d={`M${x} ${y}L${n.x} ${n.y}`} stroke="#8bc8e5" strokeWidth="1.4"/>)}<circle cx={x} cy={y} r="13" fill="#079fe3"/><text x={x} y={y-100} textAnchor="middle" fontSize="26" fontWeight="600" fill="#13202d">{continents[i]}</text></g>)}
     {hubs.map(([x,y],i)=><path key={i} d={`M${x} ${y}Q470 310 ${hubs[(i+1)%4][0]} ${hubs[(i+1)%4][1]}`} fill="none" stroke="#079fe3" strokeOpacity=".2" strokeWidth="1.5"/>)}
    </motion.g>
    {nodes.map((n,i)=><motion.circle data-network-particle={i} key={i} initial={false} animate={globe?globePoint(i,angle):{cx:n.x,cy:n.y,r:i%5===0?4.5:2.8,opacity:.85,fill:i%5===0?'#13202d':'#079fe3'}} transition={transition}/>)}
    <motion.g initial={false} animate={{opacity:globe?0:1}} transition={{duration:reduced?0:.7,delay:reduced||globe?0:1.5}}>
     <rect x="350" y="272" width="240" height="76" rx="38" fill="white" stroke="#079fe3" strokeWidth="2"/><text x="470" y="320" textAnchor="middle" fontSize="29" fontWeight="600">InsightMatches</text>
    </motion.g>
    <text x="470" y="605" textAnchor="middle" fontSize="21" fill="#64717c">Selected continents · illustrative links, not measured activity.</text>
   </svg>
   {globe&&<button className="partnership-motion-control" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'Resume rotation':'Pause rotation'}</button>}
  </div>
   {reveal&&<><button className="partnership-motion-control" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'Resume motion':'Pause motion'}</button>
   <div className={'partnership-evidence '+(paused?'is-paused':'')}>
    {partners.map(([file,name,copy])=><figure key={file}><a href={'/deck-assets/'+file} target="_blank" rel="noreferrer"><img src={'/deck-assets/'+file} alt={name+' partnership announcement'}/></a><figcaption><strong>{name}</strong><p>{copy}</p></figcaption></figure>)}
   </div></>}
 </section>;
}
