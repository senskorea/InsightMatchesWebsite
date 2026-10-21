import React,{useEffect,useState} from 'react';
import {animate,motion,useReducedMotion} from 'framer-motion';
import {preparationTotal,assistedTotal} from './preparation-effort.mjs';
const startingShare=30,endingShare=startingShare*assistedTotal/preparationTotal;
export default function PreparationShare(){
 const reduced=useReducedMotion(),[share,setShare]=useState(reduced?endingShare:startingShare);
 useEffect(()=>{if(reduced){setShare(endingShare);return}const animation=animate(startingShare,endingShare,{delay:.5,duration:2,ease:'easeInOut',onUpdate:setShare});return()=>animation.stop()},[reduced]);
 return <div className="preparation-share"><h1>From 30% to ≈9.5%<br/>of time on preparation.</h1><div className="preparation-share-pair"><svg viewBox="0 0 160 160" role="img" aria-label="Conditional preparation share shrinking from 30 percent to approximately 9.5 percent"><circle cx="80" cy="80" r="60" fill="none" stroke="#edf0f2" strokeWidth="17"/><circle cx="80" cy="80" r="60" fill="none" stroke="#d8e2e9" strokeWidth="17" pathLength="100" strokeDasharray="30 100" transform="rotate(-90 80 80)"/><motion.circle cx="80" cy="80" r="60" fill="none" stroke="#079fe3" strokeWidth="17" pathLength="100" initial={{strokeDasharray:(reduced?endingShare:startingShare)+' 100'}} animate={{strokeDasharray:endingShare+' 100'}} transition={{delay:reduced?0:.5,duration:reduced?0:2,ease:'easeInOut'}} transform="rotate(-90 80 80)"/><text x="80" y="87" textAnchor="middle" fontSize="28" fontWeight="700" fill="#13202d">{share.toFixed(1)}%</text></svg><p>Potential preparation share<br/><strong>More time for research.</strong></p></div></div>;
}
