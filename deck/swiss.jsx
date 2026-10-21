import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {CurrencyProvider} from './currency-context.jsx';
import {motion,AnimatePresence,useReducedMotion} from 'framer-motion';
import './swiss.css';
import './deck-system.css';
import './voice-refinements.css';
import {ProblemDiagram,TimeBars,BrokenTimeline,koreaPoints} from './journey-details.jsx';
import {ExtraScene,Collaborators,ProductScreens,PillarMean} from './journey-extension.jsx';
import ProductJourney from './product-journey.jsx';
import ClosingJourney from './closing-journey.jsx';
import PreparationScenario from './preparation-scenario.jsx';
import ExpansionJourney from './expansion-journey.jsx';
import EUFunding from './eu-funding.jsx';
import PresentationFrame from './presentation-frame.jsx';
import {organisationPoints} from './organisation-buildings.jsx';
import PreparationShare from './preparation-share.jsx';
import {preparationTotal,assistedTotal} from './preparation-effort.mjs';

const blue='#079fe3',ink='#13202d',grey='#d8dfe4';
const stages=['Find funding','Develop the idea','Build the team','Plan the project','Prepare the draft'];
const originalScenes=[
 ['A world of\nresearchers.','Approximately 12 million researcher full-time equivalents. Across countries and disciplines.','2023 estimate: UNESCO UIS, 1,486 researcher FTEs per million × approximately 8.1 billion people (CSO / UN). Dots are symbolic.'],
 ['A closer look\nat Korea.','More than half a million researcher full-time equivalents. Connected to a world of possibilities.','2024: MSIT / KISTEP. 503,346 FTE; 615,063 individuals. Simplified South Korea outline: Natural Earth. Dots do not represent population density.'],
 ['Research time\nis precious.','What if preparation took 30% of your time? What could reducing that burden make possible?','30% is an illustrative scenario, not a verified average or a claim that all preparation is wasted.'],
 ['First, find\nthe right funding.','A world of opportunities. Different eligibility rules, deadlines and priorities.','Horizon Europe work programmes define topic-specific scope and conditions. No verified 500-call count or ten-page average; no 5,000-page reading claim.'],
 ['Then, shape\nthe idea.','Turn a research question into a concept that answers the call without losing the science.','Conceptual illustration. No defensible universal time estimate for idea development is asserted.'],
 ['Build a team.\nAlign the expertise.','In Horizon Europe Pillar II, a consortium brings together 16 partner organisations on average.','European Commission interim evaluation (2025): Pillar II mean, 16 partner organisations, not people. Median and quartiles not established here.'],
 ['Plan the work.\nMake it add up.','Work packages, leads, milestones, deliverables, dependencies and budget rules must tell the same story.','Illustrative planning diagram, not an actual project. 40 hours is the supplied deck’s planning estimate, not a measured average.'],
 ['Prepare a draft.\nBring it together.','Combine contributions into a coherent proposal. Check evaluation criteria, ethics, required documents and submission requirements.','Supplied deck: 60 hours illustrative drafting effort. Not a research finding or a measured product benchmark.'],
 ['The idea is connected.\nThe process isn’t.','Search. Interpret. Contact. Coordinate. Write. Repeat.','Illustrative preparation journey. No measured duration is implied.'],
 ['More time\nfor research.','Our ambition: use agentic AI to reduce repetitive funding preparation.','≈'+preparationTotal+' → ≈'+assistedTotal+' preparation hours. Excludes scientific research, waiting and final submission.'],
 ['From 30% to ≈9.5% of time on preparation.','Scenario: a 30% starting share, reduced in proportion to our preparation model.','Conditional scenario: 30% × '+assistedTotal+'/'+preparationTotal+' ≈ 9.5%. Assumes the same proportional reduction in preparation time; not a measured researcher-wide outcome.'],
 ['Your idea.\nA workable draft.','Find funding. Develop the idea. Build the team. Structure the project. Prepare and review the draft.','Product journey concept. Scientific judgment and final review remain with the team.']
];
const sceneMap=[-1,-7,-4,-6,-2,-5,40,41,42,1,-8,2,-3,20,21,22,23,24,10,31,34,35,33,30,36,37,38,50,51,52];
const extras={
 '-8':['Research happens\nin many places.','We work with universities, research institutes, private companies and deep tech startups.','Different organisations. Shared research ambitions.'],
 '-1':['InsightMatches','An agentic AI platform for research funding and collaboration.','Researcher edition · interactive presentation'],
 '-2':['Research moves\nthe world forward.','People like Matti and Daniel are turning research-led ideas into possibilities.','Original imagery from the supplied deck. Project ambitions, not funded outcomes or testimonials.'],
 '-5':['EU funding.\nFind your route.','Research, collaboration and innovation. Explore the programmes that could support your next project.','Full programme budgets, not remaining funds or grants open today. Approximate USD at ECB rates, 14 October 2026: EUR 1 = USD 1.1195. Related programmes are not exclusively research funding.'],
 '-3':['Before the research,\nthe preparation.','Five connected tasks. One proposal. Each depends on the work that came before.','Process overview. Illustration, not a measured allocation of time.'],
 '-4':['A community that\nmultiplies connections.','Many teams. Many connections. Each new organisation opens more possibilities for collaboration.','Hypothetical network: 20 Korean teams × 15 European organisations = 300 possible pairings, not introductions, clients or partnerships achieved.']
};
const scenes=sceneMap.map(id=>id>=40&&id<=42?extras[-5]:id>=19?['InsightMatches in action','Five connected stages.','Actual platform captures use demo data.']:extras[[-7,-6].includes(id)?-4:id]??originalScenes[id]);
const indiaAnnex=[['india-status.png','Where does India fit in Horizon Europe?'],['india-consortium.png','How does your institution join a consortium?'],['india-research-fit.png','Where could your research fit?']];
const dots=Array.from({length:240},(_,i)=>{const y=1-2*(i+.5)/240;return {y,r:Math.sqrt(1-y*y),a:i*Math.PI*(3-Math.sqrt(5))}});
function target(i,step,angle){
 const d=dots[i],a=d.a+angle;
 if(step===1)return {cx:koreaPoints[i][0],cy:koreaPoints[i][1],r:3.4,opacity:.8,fill:blue};
 if(step===0){const z=d.r*Math.cos(a);return {cx:470+260*d.r*Math.sin(a),cy:310+260*d.y,r:2.4,opacity:.12+.55*(z+1)/2,fill:ink}}
 if(step===2){const a=-Math.PI/2+i/240*Math.PI*2;return {cx:470+Math.cos(a)*(190+(i%3)*12),cy:310+Math.sin(a)*(190+(i%3)*12),r:4,fill:i<72?blue:grey,opacity:1}}
 if(step===3){const group=i%5;return {cx:130+group*165+Math.sin(i*7)*50,cy:240+Math.cos(i*3)*100+(group%2)*100,r:3,fill:i%5===0?blue:grey,opacity:1}}
 if(step===4){const a=i/240*Math.PI*2;return {cx:470+Math.cos(a)*(i<192?210:100),cy:310+Math.sin(a)*(i<192?210:100),r:i<192?3:4,fill:i<192?grey:blue,opacity:1}}
 if(step===5){const row=i<120?0:1,j=i%120;return {cx:90+j/119*760,cy:row===0?200+Math.sin(j*.3)*50:410,r:2.8,fill:row===0?grey:blue,opacity:1}}
 const group=Math.floor(i/48);return {cx:105+group*180+Math.cos(i)*20,cy:310+Math.sin(i)*20,r:2.3,fill:blue,opacity:.8};
}
function CoreDiagram({step,reduced}){
 const [angle,setAngle]=useState(0);
 useEffect(()=>{if(reduced||step!==0)return;const id=setInterval(()=>setAngle(v=>v+.012),50);return()=>clearInterval(id)},[step,reduced]);
 return <svg viewBox="0 0 940 620" role="img" aria-label={['Rotating symbolic globe','Korea focus, symbolic highlighted community','Illustrative time allocation ring','Fragmented preparation','Ambition to reduce repetitive preparation','Fragmented and connected preparation compared','Five connected project stages'][step]}>
 {step===0&&<g fill="none" stroke="#e7ebee"><circle cx="470" cy="310" r="260"/><ellipse cx="470" cy="310" rx="260" ry="90"/><ellipse cx="470" cy="310" rx="110" ry="260"/></g>}
 {step===6&&<motion.path d="M105 310 H825" stroke={grey} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:reduced?0:1}}/>}
 {dots.map((d,i)=><motion.circle key={i} initial={false} animate={target(i,step,angle)} transition={{duration:reduced?0:step===0?.12:1.15,ease:[.22,1,.36,1]}}/>)}
 <AnimatePresence mode="wait"><motion.g key={step} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.4,delay:reduced?0:.35}}>
 {step===0&&<><rect x="220" y="225" width="500" height="175" rx="85" fill="white" fillOpacity=".94"/><text x="470" y="265" textAnchor="middle" className="svg-small">WORLD · 2023</text><text x="470" y="330" textAnchor="middle" className="svg-metric">≈12 million</text><text x="470" y="365" textAnchor="middle" className="svg-small">researchers · full-time equivalents</text></>}
 {step===1&&<><text x="650" y="275" className="svg-small">SOUTH KOREA · 2024</text><text x="650" y="340" className="svg-metric" style={{fontSize:48}}>503,346</text><text x="650" y="375" className="svg-small">researcher full-time equivalents</text></>}
 {step===2&&<><text x="470" y="310" className="svg-metric" textAnchor="middle">30%</text><text x="470" y="345" textAnchor="middle" className="svg-small">GRANT PREPARATION</text><text x="470" y="580" textAnchor="middle" className="svg-small">What if this share of your time could be reduced?</text></>}
 {step===3&&stages.map((s,i)=><text key={s} x={130+i*165} y="490" textAnchor="middle" className="svg-label">{s}</text>)}
 {step===4&&<><text x="470" y="305" textAnchor="middle" className="svg-metric">80%</text><text x="470" y="340" textAnchor="middle" className="svg-small">UP TO · AMBITION</text><text x="470" y="580" textAnchor="middle" className="svg-small">Less repetitive preparation. Not less scientific thinking.</text></>}
 {step===5&&<><text x="90" y="95" className="svg-label">Fragmented preparation</text><text x="90" y="340" className="svg-label" fill={blue}>With InsightMatches</text>{stages.map((s,i)=><text key={s} x={90+i*190} y="460" textAnchor={i===0?'start':i===4?'end':'middle'} className="svg-small">{s}</text>)}</>}
 {step===6&&stages.map((s,i)=><g key={s}><text x={105+i*180} y="380" textAnchor="middle" className="svg-label">{s}</text><text x={105+i*180} y="410" textAnchor="middle" className="svg-small">{['Discover the fit','Shape the concept','Connect expertise','Align contributions','Write and review'][i]}</text></g>)}
 </motion.g></AnimatePresence></svg>
}
function Diagram({step:sceneIndex,reduced,onPrepDetail}){
 const step=sceneMap[sceneIndex];
 const [angle,setAngle]=useState(0);
 const previous=useRef(step),[settled,setSettled]=useState(true);
 useEffect(()=>{
   if(previous.current!==step){previous.current=step;setSettled(false);}
   const id=setTimeout(()=>setSettled(true),1250);
   return()=>clearTimeout(id);
 },[step]);
 useEffect(()=>{
   if(reduced||![0,-2].includes(step)||!settled)return;
   const id=setInterval(()=>setAngle(v=>v+.012),50);
   return()=>clearInterval(id);
 },[step,reduced,settled]);
 let annotations;
 if(step===-5||(step>=40&&step<=42))annotations=<div className="funding-scene"><EUFunding/><ExpansionJourney count={step===-5?0:step-39}/></div>;
 else if(step>=30)annotations=<ClosingJourney kind={step}/>;
 else if(step>=19)annotations=<ProductJourney stage={step-20}/>;
 else if(step<0)annotations=<ExtraScene kind={step}/>;
 else if(step===2)annotations=<PreparationScenario onDetailChange={onPrepDetail}/>;
 else if(step===5)annotations=<PillarMean/>;
 else if(step===8)annotations=<ProductScreens/>;
 else if(step>=3&&step<=7)annotations=<ProblemDiagram stage={step-3} reduced={true}/>;
 else if(step===9)annotations=<TimeBars reduced={true}/>;
 else if(step===10)annotations=<BrokenTimeline reduced={true}/>;
 else annotations=<CoreDiagram step={step>=8?step-5:step} reduced={true}/>;
 return <motion.div layout className="morph-stage" transition={{layout:{duration:reduced?0:.7,ease:[.22,1,.36,1]}}}>
   <motion.div className="scene-annotations" key={[-7,-4,-6].includes(step)?'network':step>=40&&step<=42||[-2,-5].includes(step)?'charts':[31,34,35].includes(step)?'pricing':step>=30?step:step>=19?'product':step} initial={{opacity:0,y:reduced?0:12}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.65,ease:[.22,1,.36,1],delay:reduced||step>=19||[-2,-5].includes(step)?0:.35}}>{annotations}</motion.div>
   <svg className="persistent-particles" viewBox="0 0 940 620" preserveAspectRatio={step===-3?'none':'xMidYMid meet'} aria-hidden="true">
     {dots.map((_,i)=><motion.circle data-particle={i} key={i} initial={false} animate={journeyTarget(i,step,angle)} transition={{duration:reduced?0:[0,-2].includes(step)&&settled?.12:step===-8?1.8:step===-3?2.1:1.25,ease:[.45,0,.2,1]}}/>)}
   </svg>
 </motion.div>;
}
// The same 240 SVG nodes survive every chapter, including reverse navigation.
// Only coordinates and colour change; scene annotations never own the particles.
function journeyTarget(i,step,angle){
 if(step===10)return {cx:470,cy:310,r:2,fill:blue,opacity:0};
 if(step>=19)return {cx:100+i%48*14,cy:310,r:2,fill:blue,opacity:0};
 if(step===-8)return {cx:organisationPoints[i][0],cy:organisationPoints[i][1],r:2.8,fill:blue,opacity:1};
 if(step===-5){const a=i/240*Math.PI*2;return {cx:225+165*Math.cos(a),cy:290+165*Math.sin(a),r:2.5,fill:blue,opacity:.75};}
 if(step===-2)return target(i,0,angle);
 if(step===-1){const a=i/240*Math.PI*2;return {cx:470+Math.cos(a)*180,cy:290+Math.sin(a)*180,r:2,fill:blue,opacity:0};}
 if(step===-3)return {cx:90+Math.min(i,71)/71*760,cy:397,r:2,fill:i<72?blue:grey,opacity:i<72?1:0};
 if(step===-4){const side=i<120?0:1,j=i%120,n=side?15:20,node=j%n;return {cx:side?710+(node%3)*45:95+(node%4)*40,cy:145+Math.floor(node/(side?3:4))*62,r:4,fill:side?blue:ink,opacity:1};}
 if(step<3)return target(i,step,angle);
 const p=(cx,cy,fill=blue,r=3)=>({cx,cy,fill,r,opacity:.9});
 if(step===3)return p(90+i%24*33,90+Math.floor(i/24)*22,i%13===0?blue:grey);
 if(step===4){
   const group=Math.floor(i/60),j=i%60,a=j/60*Math.PI*2;
   return p(group===3?470+Math.cos(a)*14:170+group*300+Math.cos(a)*7,group===3?370+Math.sin(a)*14:170+Math.sin(a)*7,group===3?blue:ink,2);
 }
 if(step===5)return p(130+i%80/79*512,255+Math.floor(i/80)*18,blue,3);
 if(step===6){const row=Math.floor(i/60),j=i%60;return p(280+row*70+(j%20)/19*(230-row*25),115+row*85+Math.floor(j/20)*10,row%2?blue:grey,2.5)}
 if(step===7){const col=Math.floor(i/80),j=i%80,line=Math.floor(j/14);return p(110+col*270+(j%14)/13*(line%2?130:180),200+line*28,line===0?blue:grey,1.8)}
 if(step===8)return {cx:90+i/239*760,cy:560,r:2,fill:blue,opacity:.8};
 if(step===9){const row=i<120?0:1,j=i%120;return p(90+j%40/39*(row?200:640),203+row*180+Math.floor(j/40)*18,row?blue:grey,3)}
 if(step===10){
   const group=Math.floor(i/30),row=Math.floor(group/2),isAfter=group%2,j=i%30;
   const widths=isAfter?[15,75,60,100]:[100,200,200,300];
   return p(300+(isAfter?0:[0,45,15,70][row])+(j%15)/14*widths[row],104+row*95+(isAfter?28:0)+Math.floor(j/15)*8,isAfter?blue:'#e6aaa7',2);
 }
 return target(i,6,angle);
}
function App(){
 const [prepDetail,setPrepDetail]=useState(false);
 const [step,setStep]=useState(0),reduced=useReducedMotion(),gesture=useRef({last:0,total:0,changed:0});
 useEffect(()=>{
 const go=d=>setStep(v=>Math.max(0,Math.min(scenes.length-1,v+d)));
 const product=e=>{if(Number.isInteger(e.detail)&&e.detail>=0&&e.detail<5)setStep(sceneMap.indexOf(20+e.detail))};
 window.addEventListener('deck-product-stage',product);
 const key=e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.target.closest('input,textarea,select,[contenteditable="true"]'))return;if(e.key.toLowerCase()==='r'){e.preventDefault();setStep(0);gesture.current={last:0,total:0,changed:performance.now()};return;}if(e.target.closest('a,button,[role="button"]')&&!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp','Home','End','PageDown','PageUp'].includes(e.key))return;const d=['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)?1:['ArrowLeft','ArrowUp','PageUp'].includes(e.key)?-1:0;if(d){e.preventDefault();if(!e.repeat)go(d)}if(e.key==='Home'){e.preventDefault();setStep(0)}if(e.key==='End'){e.preventDefault();setStep(scenes.length-1)}};
 const wheel=e=>{if(e.ctrlKey)return;e.preventDefault();const now=performance.now(),g=gesture.current;if(now-g.last>180)g.total=0;g.last=now;if(now-g.changed<1100)return;g.total+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?600:1);if(Math.abs(g.total)>65){go(Math.sign(g.total));g.total=0;g.changed=now}};
 window.addEventListener('keydown',key);window.addEventListener('wheel',wheel,{passive:false});
 return()=>{window.removeEventListener('keydown',key);window.removeEventListener('wheel',wheel);window.removeEventListener('deck-product-stage',product)}
 },[]);
 if(sceneMap[step]>=50){const [file,title]=indiaAnnex[sceneMap[step]-50];return <main className={'annex-image-slide'+(sceneMap[step]===50?' has-funding-estimate':'')} aria-label={title} tabIndex="0"><img src={'/deck-assets/'+file} alt={title}/>{sceneMap[step]===50&&<aside className="india-funding-estimate"><strong>Indian government co-funding: approximately 1.5%, assuming 300–350 total topics.</strong><span>Working estimate for Horizon Europe 2026–27: 5 identified co-funded topics ÷ an assumed 300–350 total topics. Topic count, not budget share or participation eligibility.</span></aside>}<span className="sr-only">Use arrow keys to navigate. Home returns to the beginning.</span></main>}
 return <main className={sceneMap[step]===-2?'collage-scene':''} aria-label="InsightMatches researcher presentation" tabIndex="0"><div className="content"><div className="copy" aria-live="polite"><motion.div key={step} initial={{opacity:0,y:reduced?0:18}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.45}}><>{sceneMap[step]===10?<PreparationShare/>:<h1>{sceneMap[step]===2?(prepDetail?'≈151,000 people.\nOne full year.':'30% of time on\ngrant preparation.'):scenes[step][0]}</h1>}</><p>{sceneMap[step]===2?(prepDetail?'At a 30% preparation share, Korea’s research effort would equal 151,000 people working full time for a year.':'Research time is precious.'):scenes[step][1]}</p>{sceneMap[step]===-2&&<Collaborators/>}</motion.div></div><div className="diagram"><Diagram step={step} reduced={reduced} onPrepDetail={setPrepDetail}/></div></div><p className="evidence">{scenes[step][2]}</p><span className="sr-only">Use arrow keys or scroll to change scenes. Home returns to the beginning. End opens the final scene.</span></main>
}
createRoot(document.getElementById('root')).render(new URLSearchParams(window.location.search).get('canvas')==='1'?<CurrencyProvider><App/></CurrencyProvider>:<PresentationFrame/>);
