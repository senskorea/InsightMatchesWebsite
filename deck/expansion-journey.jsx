import React from 'react';
import {motion,useReducedMotion} from 'framer-motion';
const reports=[
 ['korea','South Korea','First Asian associate member','Korea.net · 18 July 2025'],
 ['japan','Japan','Agreement signed to join Horizon Europe','The Japan Times · 31 July 2026'],
 ['australia','Australia','Pillar II association negotiations concluded','European Commission · 9 June 2026']
];
const articleFrames={
 korea:{width:909,height:1024,headline:'18 190 850 104',photo:'18 424 810 560'},
 japan:{width:1024,height:1021,headline:'20 120 620 68',photo:'20 218 620 495'},
 australia:{width:881,height:1024,headline:'20 175 840 88',photo:'20 348 740 492'}
};
function ArticleCrop({id,country}){
 const frame=articleFrames[id],src='/deck-assets/'+id+'_horizon_europe_agreement.png';
 return <div className="expansion-article-crop">{['headline','photo'].map(part=><svg key={part} className={'expansion-crop-'+part} viewBox={frame[part]} preserveAspectRatio="xMidYMid meet" role="img" aria-label={country+' article '+(part==='headline'?'original headline':'main photograph')}><defs><clipPath id={'article-'+id+'-'+part}><rect x={frame[part].split(' ')[0]} y={frame[part].split(' ')[1]} width={frame[part].split(' ')[2]} height={frame[part].split(' ')[3]}/></clipPath></defs><image href={src} width={frame.width} height={frame.height} clipPath={'url(#article-'+id+'-'+part+')'}/></svg>)}</div>;
}
export default function ExpansionJourney({count}){
 const reduced=useReducedMotion();
 return <section className="expansion-overlay" aria-label="Horizon Europe international association headlines" style={{pointerEvents:count?'auto':'none'}} aria-hidden={!count}>
  <div className="expansion-reports">{reports.map(([id,country,status,source],i)=><motion.figure key={id} style={{pointerEvents:i<count?'auto':'none'}} aria-hidden={i>=count} initial={{opacity:0,y:reduced?0:100}} animate={{opacity:i<count?1:0,y:i<count||reduced?0:100}} transition={{duration:reduced?0:.8,ease:[.22,1,.36,1]}}>
   <a tabIndex={i<count?0:-1} href={'/deck-assets/'+id+'_horizon_europe_agreement.png'} target="_blank" rel="noreferrer" aria-label={'Open full '+country+' article screenshot'}><ArticleCrop id={id} country={country}/></a>
   <figcaption><strong>{country}</strong><span>{status}</span><small>{source}</small></figcaption>
  </motion.figure>)}</div>
  {count>0&&<small>Reported milestones, not identical association status. Participation depends on agreement and call conditions.</small>}
 </section>;
}
