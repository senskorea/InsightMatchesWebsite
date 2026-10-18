import React,{useState,useEffect} from 'react';
export default function PreparationScenario({onDetailChange}){
 const [hover,setHover]=useState(false),[focus,setFocus]=useState(false),[pinned,setPinned]=useState(false);
 const show=hover||focus||pinned;
 useEffect(()=>{onDetailChange(show);return()=>onDetailChange(false)},[show,onDetailChange]);
 // Same coordinates as the shared particle ring. Transparent annular hit target.
 const a=.3*Math.PI*2-Math.PI/2;
 const path='M470 77 A233 233 0 0 1 '+(470+233*Math.cos(a))+' '+(310+233*Math.sin(a))+' L'+(470+175*Math.cos(a))+' '+(310+175*Math.sin(a))+' A175 175 0 0 0 470 135 Z';
 return <svg viewBox="0 0 940 620" className="preparation-scenario" aria-label="Illustrative 30 percent grant preparation scenario">
 <g><text x="470" y="310" textAnchor="middle" className="svg-metric">30%</text><text x="470" y="355" textAnchor="middle" style={{fontSize:23}}>GRANT PREPARATION · ESTIMATE</text></g>
 <path d={path} fill="transparent" role="button" tabIndex="0" aria-label="Show illustrative Korean preparation time scenario" aria-pressed={pinned} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onClick={()=>setPinned(v=>!v)} onKeyDown={e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();setPinned(v=>!v)}}}/>
 <text x="470" y="565" textAnchor="middle" className="svg-small">{show?'Korean researcher time, at a 30% preparation share.':'Less time on applications.'}</text>
 <text x="470" y="595" textAnchor="middle" className="svg-small">More time on research.</text>
 </svg>;
}
