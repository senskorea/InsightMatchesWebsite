import React,{useState,useEffect} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
const profiles=[
 ['Health','Health researcher','Earlier detection through biomedical research',null],
 ['Culture, Creativity & Inclusive Society','Society researcher','Understanding inclusive cultural participation',null],
 ['Civil Security for Society','Security researcher','Strengthening community disaster resilience',null],
 ['Digital, Industry & Space','Digital researcher','Trustworthy AI for scientific discovery',null],
 ['Climate, Energy & Mobility','Matti Douy','Hydrogen mobility','25 515 460 325'],
 ['Food, Bioeconomy, Natural Resources, Agriculture & Environment','Daniel Enebeli','Circular economy','850 515 440 325']
];
export default function ClusterProfiles(){
 const reduced=useReducedMotion();
 const [active,setActive]=useState(4);
 const [playing,setPlaying]=useState(true),[restart,setRestart]=useState(0);
 useEffect(()=>{if(!playing)return;const timer=setInterval(()=>setActive(i=>(i+1)%profiles.length),4500);return()=>clearInterval(timer)},[playing,restart]);
 useEffect(()=>{const key=e=>{if(e.key!==' '||e.ctrlKey||e.metaKey||e.altKey||e.target.closest('input,textarea,select,[contenteditable="true"]'))return;e.preventDefault();e.stopImmediatePropagation();if(e.repeat)return;setActive(0);setPlaying(true);setRestart(n=>n+1)};window.addEventListener('keydown',key,true);return()=>window.removeEventListener('keydown',key,true)},[]);
 const [cluster,name,topic,crop]=profiles[active];
 return <section className="cluster-story"><button className="cluster-play-top" type="button" aria-label={playing?'Pause cluster rotation':'Play cluster rotation'} title={playing?'Pause rotation · Space restarts':'Play rotation · Space restarts'} onClick={()=>setPlaying(v=>!v)}>{playing?'Ⅱ':'▶'}</button>
 <div><h1>We work with researchers<br/>across every field.</h1>
 <p className="cluster-audience">Universities, research labs and companies—with a focus on deep-tech startups.</p>
 <figure className="cluster-polaroid" aria-live="polite">
 {crop?<svg viewBox={crop} role="img" aria-label={name+' original project portrait'}><image href="/deck-assets/entrepreneurs-original.png" width="1672" height="941"/></svg>:<div className="mock-portrait" aria-label="Portrait placeholder"><span aria-hidden="true">◯</span><small>PORTRAIT TO FOLLOW</small></div>}
 <figcaption><small>{crop?'Original project profile':'Mock profile · replace before publishing'}</small><strong>{name}</strong><p>{topic}</p></figcaption>
 </figure></div>
 <div className="cluster-wheel"><motion.div layoutId="research-funding-wheel" transition={{duration:reduced?0:1.35,ease:[.22,1,.36,1]}}><svg viewBox="0 0 600 600" aria-label="Six equal research areas of Horizon Europe Pillar II">
 {profiles.map(([label],i)=>{const a=(i*60-90)*Math.PI/180,b=((i+1)*60-90)*Math.PI/180;const d='M300 300 L'+(300+245*Math.cos(a))+' '+(300+245*Math.sin(a))+' A245 245 0 0 1 '+(300+245*Math.cos(b))+' '+(300+245*Math.sin(b))+' Z';return <path key={label} d={d} fill={active===i?'#079fe3':['#d8e2e9','#c1d2de','#a6bfce','#8cabbf','#7297af','#567e97'][i]} stroke="white" strokeWidth="5" role="button" tabIndex="0" aria-label={label} aria-pressed={active===i} onMouseEnter={()=>{if(!playing)setActive(i)}} onFocus={()=>{if(!playing)setActive(i)}} onClick={()=>{setPlaying(false);setActive(i)}} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();setPlaying(false);setActive(i)}}}/>})}
 <circle cx="300" cy="300" r="112" fill="white"/><text x="300" y="291" textAnchor="middle" className="svg-label">HORIZON EUROPE</text><text x="300" y="323" textAnchor="middle" className="svg-small">PILLAR II · SIX CLUSTERS</text>
 </svg></motion.div><h2>{cluster}</h2><p>{playing?'Auto-rotation on · hover does not interrupt.':'Hover or click to explore.'} Equal segments show research areas, not budget shares.</p></div>
 </section>;
}
