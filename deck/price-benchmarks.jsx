import React from 'react';
import {useCurrency} from './currency-context.jsx';
import {motion,useReducedMotion} from 'framer-motion';
const groups=[
 {title:'Commission proposal support',basis:'USD per proposal · survey benchmark, not identical scopes',max:9000,rows:[
  ['Consultancy survey median',8396,'€7,500 · Horizon Europe consortium proposals','https://ec.europa.eu/transparency/documents-register/api/files/SWD%282025%29110_0/090166e525ea7d8b?rendition=false'],
  ['InsightMatches team-written',3750,'Proposal support from start to finish',null]
 ]}
];
export default function PriceBenchmarks(){
 const reduced=useReducedMotion();
 const {currency,format}=useCurrency();
 return <section className="closing-slide pricing-slide benchmark-slide"><header><h1>Proposal support.<br/>About 55% cheaper.</h1><p>Compared with the consultancy survey median.</p></header>
 <div className="benchmark-groups">{groups.map(group=><section key={group.title}><h2>{group.title}</h2><p className="benchmark-basis">{currency+' per proposal · survey benchmark, not identical scopes'}</p>{group.rows.map(([name,value,note,url])=><div className={'benchmark-row'+(!url?' benchmark-ours':'')} key={name}><div className="benchmark-label"><strong>{url?<a href={url} target="_blank" rel="noreferrer">{name}</a>:name}</strong><b>{value?format(value):'Free'}</b></div><div className="benchmark-track"><motion.div initial={{width:0}} animate={{width:value/group.max*100+'%'}} transition={{duration:reduced?0:.7}}/></div><small>{note}</small></div>)}</section>)}</div>
 <small>European Commission interim evaluation (2025): median reported consultancy expenditure, not an equivalent full-service quote. €7,500 ≈ $8,396 at EUR/USD 1.1195 (14 Oct 2026). Other currencies use the same fixed ECB rates: EUR 1 = KRW 1,496.54. Scope, taxes and success fees differ. Illustrative price comparison, not a savings guarantee.</small>
 </section>;
}
