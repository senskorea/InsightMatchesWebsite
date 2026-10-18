import React,{useId} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
// Original 2172 × 724 artwork: drawings are not equal-width sprite cells.
const frames=[[0,450],[450,350],[800,550],[1350,400],[1750,422]];
export default function PreparationArt({i,large=false,overview=false}){
 const reduced=useReducedMotion(),[x,width]=frames[i],clip=useId();
 return <motion.span layoutId={'product-art-'+i} className={overview?'preparation-art':('product-art '+(large?'large':''))} transition={{duration:reduced?0:1.5,ease:[.22,1,.36,1]}} aria-hidden="true">
 <svg viewBox={x+' 0 '+width+' 724'} preserveAspectRatio="xMidYMid meet" style={{width:'100%',height:'100%',overflow:'hidden'}}><defs><clipPath id={clip}><rect x={x} y="0" width={width} height="724"/></clipPath></defs><image clipPath={'url(#'+clip+')'} href="/deck-assets/preparation-line-art.png" width="2172" height="724"/></svg>
 </motion.span>;
}
