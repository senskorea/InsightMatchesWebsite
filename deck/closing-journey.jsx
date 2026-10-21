import React,{useState} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import PriceBenchmarks from './price-benchmarks.jsx';
import {useCurrency} from './currency-context.jsx';
import {preparationTotal,assistedTotal,preparationReduction} from './preparation-effort.mjs';
const tiers=[
 {name:'Join the community',price:'Free',basis:'Free membership',items:['Get listed on our platform','Join upcoming consortia','Join the community']},
 {name:'Create with AI Copilot',price:'$2,600',basis:'USD per year',items:['Create your own proposal','Assemble your research team','Write it with our AI Copilot']},
 {name:'We write it with you',price:'$3,750',basis:'USD per project',items:['The InsightMatches team writes your proposal','Support from start to finish','Your science. Our proposal support.']}
];
export default function ClosingJourney({kind}){
 const reduced=useReducedMotion();
 const {currency,price}=useCurrency();
 const [communityFocus,setCommunityFocus]=useState(null);
 const reveal=kind===31?1:kind===34?2:3;
 if(kind===38)return <section className="closing-slide pricing-slide team-slide"><header><h1>The team behind InsightMatches.</h1></header><div className="team-grid">{[
  ['team-paul-illustrated-v1.png','Paul Conversy','CEO','Leads the vision.'],
  ['team-serena-illustrated-v1.png','Serena Radano','Grants & Product Lead','Leads grant strategy.'],
  ['team-junior-illustrated-v1.png','Junior Mukenze','Head of AI Engineering','Oversees the AI engine.'],
  ['team-mark-illustrated-v1.png','Mark Potapov','Full Stack Product Engineer','Leads platform development.']
 ].map(([photo,name,role,description])=><article key={name} tabIndex={0}><div className="team-portrait-frame"><img className="team-portrait" src={'/deck-assets/'+photo} alt={'Illustrated portrait of '+name}/></div><h2>{name}</h2><p className="team-role">{role}</p><p className="team-description">{description}</p></article>)}</div></section>;
 if(kind===36)return <section className="closing-slide pricing-slide reasons-slide"><header><h1>Why work with us?</h1><p>Pursue a portfolio of proposals, not just one application.</p></header><div className="reasons-grid">{[
  ['Prepare faster. Pursue more.','Use our AI Copilot to prepare proposals faster and pursue more calls. Around '+preparationReduction+'% less preparation time: ≈'+preparationTotal+' hours down to ≈'+assistedTotal+'.'],
  ['Extend your network.','Tap into an existing research community to discover partners and introductions beyond your own contacts, without building every relationship from scratch.'],
  ['Keep preparation costs down.','Get AI and expert proposal support without adding a dedicated grant-writing role to your team.']
 ].map(([title,copy],i)=><motion.article key={title} initial={{opacity:0,y:reduced?0:18}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.55,delay:reduced?0:i*.2}}>
  <svg className="reason-symbol" viewBox="0 0 300 140" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
   {i===0?<><path d="M45 70H110M110 70L190 25M110 70H190M110 70L190 115"/><circle cx="45" cy="70" r="12" fill="currentColor"/>{[5,50,95].map(y=><g key={y}><rect x="190" y={y} width="40" height="40" rx="3"/><path d={`M200 ${y+14}h20m-20 10h14`}/></g>)}</>:i===1?<>{Array.from({length:12},(_,n)=>{const x=n<6?28+(n%2)*28:244+(n%2)*28,y=20+Math.floor(n%6/2)*50;return <g key={n}><path d={`M${x} ${y}L150 70`} strokeOpacity=".45" strokeWidth="2"/><circle cx={x} cy={y} r="6" fill="white"/></g>})}<circle cx="150" cy="70" r="21" fill="white"/><circle cx="150" cy="70" r="8" fill="currentColor"/></>:<><path d="M60 25V115H250"/><rect x="85" y="35" width="45" height="80" fill="#f5deda" stroke="none"/><rect x="160" y="75" width="45" height="40" fill="currentColor"/><path d="M145 35L215 60m-15-22 15 22-26 3"/></>}
  </svg><h2>{title}</h2><p>{copy}</p>
 </motion.article>)}</div></section>;
 if(kind===37)return <section className="closing-final mailing-slide"><img className="closing-brand" src="/deck-assets/insightmatches-original.png" alt="InsightMatches"/><h1>Let’s connect.</h1><p>Scan the QR code to join our mailing list.</p><a className="mailing-qr-link" href="https://www.insightmatches.com/mailing" target="_blank" rel="noreferrer"><img src="/deck-assets/mailing-qr.png" alt="Scan to visit the InsightMatches mailing list"/><span>www.insightmatches.com/mailing</span></a></section>;
 if(kind===33)return <PriceBenchmarks/>;
 if(kind===30)return <section className="closing-slide community-slide"><div><h1>Building a<br/>research community.</h1><p className="community-purpose" aria-live="polite">{communityFocus??<>Seoul Researcher Mixer<br/>3 November 2026</>}</p></div><div className="community-flyers">{[['community-mixer.png','Seoul Researcher Mixer','Networking for researchers · 3 November 2026'],['community-rd-day-v1.png','R&D Day 2026','Pitching opportunities'],['community-dinner.png','Leadership dinners','C-level meetings']].map(([file,label,purpose])=><a key={file} onMouseEnter={()=>setCommunityFocus(purpose)} onMouseLeave={()=>setCommunityFocus(null)} onFocus={()=>setCommunityFocus(purpose)} onBlur={()=>setCommunityFocus(null)} href={'/deck-assets/'+file} target="_blank" rel="noreferrer"><img src={'/deck-assets/'+file} alt={label}/></a>)}</div></section>;
 if([31,34,35].includes(kind))return <section className="closing-slide pricing-slide">
 <header><h1>The support you need.</h1><p>Join the community. Create with AI. Bring in our team.</p></header>
 <div className="pricing-tiers">
 {tiers.map((tier,i)=><motion.article key={tier.name} aria-hidden={i>=reveal} initial={{opacity:0,y:reduced?0:24}} animate={{opacity:i<reveal?1:0,y:i<reveal||reduced?0:24}} transition={{duration:reduced?0:.5}}><span className="tier-number">0{i+1} · {['CONNECT','CREATE','TEAM-WRITTEN'][i]}</span><h2>{tier.name}</h2><div className="tier-price">{i?price(i===1?2600:3750):'Free'}</div><p className="tier-basis">{i?currency+(i===1?' per year':' per project')+(currency==='USD'?'':' · converted estimate'):'Free membership'}</p><ul>{tier.items.map(item=><li key={item}>{item}</li>)}</ul></motion.article>)}
 </div></section>;
 if(kind===33)return <section className="closing-slide pricing-slide competition-slide">
 <header><h1>Beyond finding a grant.</h1><p>Find the opportunity. Build the team. Prepare the proposal.</p></header>
 <div className="approach-comparison">
 <article><span className="tier-number">DISCOVER</span><h2>Funding-discovery<br/>platforms</h2><p>Find relevant opportunities.</p><ul><li>Search calls and funding programmes</li><li>Screen opportunities and deadlines</li><li>You take the next steps toward a proposal</li></ul><small>Discovery-focused use case; individual platforms may offer more.</small></article>
 <article><span className="tier-number">DELEGATE</span><h2>Traditional<br/>consultants</h2><p>Commission specialist support.</p><ul><li>Agree a brief with an expert</li><li>Commission proposal preparation</li><li>Scope and fees depend on the engagement</li></ul><small>Illustrative engagement model, not a claim about every consultancy.</small></article>
 <article className="approach-ours"><span className="tier-number">CONNECT + CREATE</span><h2>InsightMatches</h2><p>From opportunity to proposal.</p><ul><li>Find funding and connect with collaborators</li><li>Create proposals with your AI copilot</li><li>Choose team-written proposal support</li></ul><small>Free community · {price(2600)}/year AI copilot<br/>{price(3750)}/project team-written support</small></article>
 </div><small>Comparison of approaches, not a feature audit of named providers or a lowest-price claim. Consultant quotes and equivalent scopes must be verified before comparing fees.</small>
 </section>;
 return <section className="closing-final"><img src="/deck-assets/insightmatches-original.png" alt="InsightMatches"/><h1>More time for research.<br/>More possibilities together.</h1><p>Let’s start with your next research idea.</p><small>An agentic AI platform for research funding and collaboration.</small></section>;
}
