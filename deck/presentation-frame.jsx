import React,{useState,useEffect,useRef} from 'react';
import {validCurrency,fxSource} from './currency.mjs';
export default function PresentationFrame(){
 const [fixed,setFixed]=useState(true),[size,setSize]=useState({width:window.innerWidth,height:window.innerHeight});
 const frame=useRef(null);
 const [currency,setCurrency]=useState(()=>validCurrency(new URLSearchParams(window.location.search).get('currency')));
 const updateCurrency=value=>{setCurrency(value);const target=frame.current?.contentWindow;if(target)target.dispatchEvent(new target.CustomEvent('deck-currency',{detail:value}));};
 useEffect(()=>{const resize=()=>setSize({width:window.innerWidth,height:window.innerHeight});window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize)},[]);
 const scale=Math.min(size.width/1920,size.height/1080);
 const url=new URL(window.location.href);url.searchParams.set('canvas','1');
 const navigate=key=>{const target=frame.current?.contentWindow;if(!target)return;target.document.querySelector('main')?.dispatchEvent(new target.KeyboardEvent('keydown',{key,bubbles:true}));target.focus()};
 return <div className="presentation-shell">
  <div className="currency-control"><label>Currency <select value={currency} onChange={e=>updateCurrency(e.target.value)}>{['USD','EUR','KRW'].map(code=><option key={code}>{code}</option>)}</select></label><a href={fxSource} target="_blank" rel="noreferrer">Fixed FX · 14 Oct 2026</a></div>
  <nav className="deck-controls" aria-label="Presentation controls"><button onClick={()=>navigate('ArrowLeft')} aria-label="Previous slide">←</button><button onClick={()=>navigate('Home')}>Start</button><button onClick={()=>navigate('ArrowRight')} aria-label="Next slide">→</button></nav>
  <iframe ref={frame} title="InsightMatches presentation" src={url.href} onLoad={()=>{updateCurrency(currency);frame.current?.contentWindow?.focus()}} style={fixed?{width:1920,height:1080,transform:'translate(-50%,-50%) scale('+scale+')'}:{width:'100%',height:'100%',transform:'translate(-50%,-50%)'}}/>
  <button className="presentation-mode" aria-label="Toggle fixed 16 by 9 slide size" aria-pressed={fixed} onClick={()=>{setFixed(v=>!v);frame.current?.contentWindow?.focus()}}>{fixed?'16:9':'Fit window'} <span>⇄</span></button>
 </div>;
}
