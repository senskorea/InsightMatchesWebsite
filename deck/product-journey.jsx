import React from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import PreparationArt from './preparation-art.jsx';
const stages=[
 ['Find funding','Find the opportunity that fits.','Screen the call, eligibility, deadlines and expected outcomes.','Scattered opportunity information','Funding filters and call details in one view','funding.jpg','Actual funding discovery screen · demo data'],
 ['Develop the idea','Give the research question a clear direction.','Connect the scientific idea to the call’s objectives and expected impact.','A question without a proposal structure','A structured narrative to develop and review','writing.jpg','Temporary stand-in: actual writing editor, NOT an idea-development screen'],
 ['Build the team','Bring complementary expertise together.','Review partner profiles, contributions and the call’s requirements.','Separate searches and disconnected profiles','Partner discovery and contributions in context','partners.jpg','Actual partner discovery screen · demo data'],
 ['Plan the project','Make the work and budget tell one story.','Define work packages, leads, milestones, deliverables, dependencies and costs.','Responsibilities and budget in separate documents','Work packages, ownership and timing in one plan','planning.jpg','Actual project work plan · demo data'],
 ['Prepare the draft','Bring the proposal together.','Develop Excellence, Impact and Implementation, then check ethics, mandatory documents and submission rules.','Contributions assembled and checked manually','Guided sections and a compiled proposal review','writing.jpg','Actual guided section editor · demo data']
];
export function goProduct(stage){window.dispatchEvent(new CustomEvent('deck-product-stage',{detail:stage}));}
const Art=PreparationArt;
export default function ProductJourney({stage}){
 const reduced=useReducedMotion();
 if(stage<0)return <section className="product-overview"><h1>These steps belong<br/>to one project.</h1><p>InsightMatches brings them together.</p><div className="product-overview-steps">{stages.map(([label],i)=><button key={label} onClick={()=>goProduct(i)}><Art i={i} large/>{label}</button>)}</div><p className="product-note">Choose a stage, or press → to see InsightMatches in action.</p></section>;
 const [label,title,body,before,after,file,caption]=stages[stage];
 return <section className="product-journey">
 <nav aria-label="Product demonstration stages">{stages.map(([name],i)=><button key={name} aria-current={stage===i?'step':undefined} onClick={()=>goProduct(i)}>{stage!==i&&<Art i={i}/>}<span>{name}</span></button>)}</nav>
 <div className="product-demo-body"><div className="product-explanation"><Art i={stage} large/><motion.div key={stage} initial={{opacity:0,y:reduced?0:12}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.65}}><h1>{label}</h1><p className="product-lead">{title}</p><p>{body}</p></motion.div><div className="product-comparison"><small>THE PREPARATION CHALLENGE</small><p>{before}</p><small>WITH INSIGHTMATCHES</small><p>{after}</p></div></div>
 <motion.figure key={stage} initial={{opacity:reduced?1:0,x:reduced?0:18}} animate={{opacity:1,x:0}} transition={{duration:reduced?0:.65,ease:[.22,1,.36,1]}}><a href={'/deck-assets/'+file} target="_blank" rel="noreferrer" aria-label={'Open full-size screenshot: '+label}><img src={'/deck-assets/'+file} alt={caption}/></a><figcaption>{caption}. Existing capture, October 2026; not a live AI demonstration. Click image to enlarge.</figcaption>{stage===3&&<a href="/deck-assets/budget.jpg" target="_blank" rel="noreferrer">Open budget and effort view ↗</a>}{stage===4&&<a href="/deck-assets/review.jpg" target="_blank" rel="noreferrer">Open compiled review view ↗</a>}</motion.figure></div>
 <p className="product-note">Product mechanics, not measured time savings. Scientific judgement and final checks remain with the team.</p>
 </section>;
}
