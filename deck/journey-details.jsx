import React from 'react';
import {motion} from 'framer-motion';
import {preparationEffort,preparationTotal,assistedTotal,preparationSaved} from './preparation-effort.mjs';
const blue='#079fe3',grey='#d8dfe4',ink='#13202d';
// Natural Earth 1:110m admin-0 KOR mainland, public-domain geographic data.
// Simplified at this scale: Jeju and small islands are omitted.
const coast=[[126.174759,37.749686],[126.237339,37.840378],[126.68372,37.804773],[127.073309,38.256115],[127.780035,38.304536],[128.205746,38.370397],[128.349716,38.612243],[129.21292,37.432392],[129.46045,36.784189],[129.468304,35.632141],[129.091377,35.082484],[128.18585,34.890377],[127.386519,34.475674],[126.485748,34.390046],[126.37392,34.93456],[126.559231,35.684541],[126.117398,36.725485],[126.860143,36.893924]];
function inside(x,y){let yes=false;for(let i=0,j=coast.length-1;i<coast.length;j=i++){const [a,b]=coast[i],[c,d]=coast[j];if((b>y)!==(d>y)&&x<(c-a)*(y-b)/(d-b)+a)yes=!yes}return yes}
const candidates=[];for(let y=34.39;y<=38.62;y+=.12)for(let x=126.11;x<=129.48;x+=.12)if(inside(x,y))candidates.push([280+(x-126.11)*95*Math.cos(36.5*Math.PI/180),520-(y-34.39)*95]);
export const koreaPoints=Array.from({length:240},(_,i)=>candidates[Math.floor(i*candidates.length/240)]);
const labels=preparationEffort.map(s=>s.label);
function Canvas({label,children}){return <svg viewBox="0 0 940 620" role="img" aria-label={label}>{children}</svg>}
export function TimeBars({reduced}){return <Canvas label={'Approximately '+preparationTotal+' preparation hours without InsightMatches and '+assistedTotal+' with InsightMatches'}>
 {[preparationTotal,assistedTotal].map((hours,i)=><g key={hours}><text x="90" y={170+i*180} className="svg-label">{i?'With InsightMatches':'Without InsightMatches'}</text><motion.rect x="90" y={195+i*180} height="55" fill={i?blue:grey} initial={{width:0}} animate={{width:hours*4}} transition={{duration:reduced?0:1}}/><text x={110+hours*4} y={233+i*180} className="svg-label">≈{hours} h</text></g>)}
 <text x="90" y="585" className="svg-label">≈{preparationSaved} hours freed up for research.</text>
 </Canvas>}
export function BrokenTimeline({reduced}){return <Canvas label="Five proposal preparation stages compared on the same person-hour scale">
 <text x="260" y="38" fontSize="20" fill="#a04f4c">Without InsightMatches</text><text x="650" y="38" fontSize="20" fill={blue}>With InsightMatches</text>
 {preparationEffort.map(({label,before,after},i)=><g key={label}>
  <text x="35" y={85+i*78} fontSize="21" fill={ink}>{label}</text>
  <motion.rect x="260" y={65+i*78} height="19" fill="#e6aaa7" initial={{width:0}} animate={{width:before*5}} transition={{duration:reduced?0:.7}}/>
  <text x={270+before*5} y={80+i*78} fontSize="18" fill="#64717c">≈{before} h</text>
  <motion.rect x="260" y={93+i*78} height="15" fill={blue} initial={{width:0}} animate={{width:after*5}} transition={{duration:reduced?0:.8}}/>
  <text x={270+after*5} y={106+i*78} fontSize="18" fill="#64717c">≈{after} h</text>
  {i<4&&<path d={'M260 '+(110+i*78)+'v33'} stroke={blue} fill="none"/>}
 </g>)}
 <text x="45" y="525" fontSize="42" fontWeight="700" fill={blue}>≈{assistedTotal} hours</text><text x="500" y="525" fontSize="42" fontWeight="700" fill="#a04f4c">≈{preparationTotal} hours</text>
 <text x="45" y="557" fontSize="21">With InsightMatches</text><text x="500" y="557" fontSize="21">Without InsightMatches</text>
 <text x="45" y="608" fontSize="21" fill="#64717c">≈{preparationSaved} hours freed up for research · same five preparation stages</text>
 </Canvas>}
export function ProblemDiagram({stage,reduced}){
 return <Canvas label={['Horizon Europe opportunity screening','Developing a concept from question, call and evidence','Mean consortium sizes: 12 Horizon 2020, 16 Horizon Europe Pillar II','Illustrative project planning and work packages','Illustrative drafting and review'][stage]}>
 <motion.g key={stage} initial={{opacity:0,y:reduced?0:12}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.5}}>
 {stage===0&&<>{Array.from({length:70},(_,i)=><circle key={i} cx={90+i%14*58} cy={90+Math.floor(i/14)*48} r={i%13===0?5:3} fill={i%13===0?blue:grey}/>)}<text x="90" y="410" className="svg-metric">Find the fit.</text><text x="90" y="450" className="svg-label">Scope · eligibility · deadlines · expected outcomes</text><text x="90" y="485" className="svg-small">Horizon Europe work programmes and topic conditions</text><text x="90" y="550" className="svg-small">No verified universal call count or average topic length.</text></>}
 {stage===1&&<>{['Research question','Call priorities','Available evidence'].map((s,i)=><g key={s}><circle cx={170+i*300} cy="170" r="7" fill={ink}/><text x={170+i*300} y="125" textAnchor="middle" className="svg-label">{s}</text><path d={'M'+(170+i*300)+' 190 L470 350'} stroke={grey} fill="none"/></g>)}<circle cx="470" cy="370" r="14" fill={blue}/><text x="470" y="440" textAnchor="middle" className="svg-metric">One concept</text><text x="470" y="485" textAnchor="middle" className="svg-small">A coherent scientific case, not just a completed form.</text></>}
 {stage===2&&<>{[12,16].map((n,col)=><g key={n}>{Array.from({length:n},(_,i)=>{const a=i/n*Math.PI*2,x=250+col*430+Math.cos(a)*140,y=270+Math.sin(a)*140;return <g key={i}><path d={'M'+(250+col*430)+' 270 L'+x+' '+y} stroke={grey}/><circle cx={x} cy={y} r="6" fill={col?blue:ink}/></g>})}<text x={250+col*430} y="285" textAnchor="middle" className="svg-metric">{n}</text><text x={250+col*430} y="470" textAnchor="middle" className="svg-label">{col?'Horizon Europe Pillar II':'Horizon 2020'}</text></g>)}<text x="470" y="545" textAnchor="middle" className="svg-small">Mean partners per consortium · European Commission, 2025</text></>}
 {stage===3&&<>{['Research','Validation','Demonstration','Coordination'].map((s,i)=><g key={s}><text x="70" y={135+i*85} className="svg-label">{s}</text><path d={'M270 '+(130+i*85)+' H850'} stroke="#eef1f3"/><rect x={280+i*70} y={110+i*85} width={230-i*25} height="30" fill={i%2?blue:grey}/><circle cx={530+i*55} cy={125+i*85} r="5" fill={ink}/></g>)}<text x="70" y="530" className="svg-metric">40 h</text><text x="270" y="520" className="svg-label">Illustrative planning effort</text><text x="270" y="550" className="svg-small">Work packages · leads · milestones · budget rules</text></>}
 {stage===4&&<>{['Excellence','Impact','Implementation'].map((s,i)=><g key={s}><rect x={90+i*270} y="110" width="230" height="290" fill="white" stroke={grey}/><text x={110+i*270} y="155" className="svg-label">{s}</text>{[0,1,2,3,4,5].map(j=><path key={j} d={'M'+(110+i*270)+' '+(200+j*28)+' h'+(j%2?130:180)} stroke={j===0?blue:grey} strokeWidth="3"/>)}</g>)}<text x="90" y="510" className="svg-metric">60 h</text><text x="285" y="500" className="svg-label">Illustrative drafting effort</text><text x="285" y="535" className="svg-small">Assemble · ethics · documents · review</text></>}
 </motion.g></Canvas>
}
