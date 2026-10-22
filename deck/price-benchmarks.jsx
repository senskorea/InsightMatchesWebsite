import React from 'react';
import {useCurrency} from './currency-context.jsx';
import {motion,useReducedMotion} from 'framer-motion';
// ECB 14 Oct 2026: EUR 1 = GBP 0.84385 = USD 1.1195.
const hiringSalaryUSD=[43277,51714].map(gbp=>gbp/0.84385*1.1195);
const groups=[
 {title:'Commission proposal support',basis:'USD per proposal · survey benchmark, not identical scopes',max:9000,rows:[
  ['Consultancy survey median',8396,'€7,500 · Horizon Europe consortium proposals','https://ec.europa.eu/transparency/documents-register/api/files/SWD%282025%29110_0/090166e525ea7d8b?rendition=false'],
  ['InsightMatches team written',3750,'Proposal support from start to finish',null]
 ]}
];
export default function PriceBenchmarks(){
 const reduced=useReducedMotion();
 const {currency,format,price}=useCurrency();
 return <section className="closing-slide pricing-slide benchmark-slide"><header><h1>Up to 55% more affordable.</h1><p>Proposal support compared with the consultancy survey median.</p></header>
 <div className="hiring-comparison-row" aria-label="Annual hiring cost benchmark"><div className="benchmark-label"><strong><a href="https://jobs.lse.ac.uk/Vacancies/W/3508/0/470040/15539/research-grant-application-manager" target="_blank" rel="noreferrer">Research Grant Application Manager ↗</a></strong><div className="salary-endpoints">{hiringSalaryUSD.map((value,i)=><b key={value}><small>{i?'UPPER':'LOWER'}</small>{format(value,'USD',true)}</b>)}</div></div><div className="extended-salary-track" role="img" aria-label={'Annual salary range: '+hiringSalaryUSD.map(value=>format(value,'USD',true)).join(' to ')}><motion.div className="salary-base" initial={{scaleX:reduced?1:0}} animate={{scaleX:1}} transition={{duration:reduced?0:.8}}/><motion.div className="salary-band" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:reduced?0:.7}}/><span className="salary-scale-break" aria-hidden="true">//</span></div></div>
 <div className="benchmark-groups">{groups.map(group=><section key={group.title}><h2>{group.title}</h2>{group.rows.map(([name,value,,url])=><div className={'benchmark-row'+(!url?' benchmark-ours':'')} key={name}><div className="benchmark-label"><strong>{url?<a href={url} target="_blank" rel="noreferrer">{name}</a>:name}</strong><b>{value?(url?format(value):price(value)):'Free'}</b></div><div className="benchmark-track"><motion.div initial={{width:0}} animate={{width:value/group.max*100+'%'}} transition={{duration:reduced?0:.7}}/></div></div>)}</section>)}</div>

 <footer className="pricing-comparison-footer"><p>{currency} · Hiring: annual base salary. Proposal support: per proposal. Compressed scale; scopes differ.</p><p>Sources: EC consultancy survey median (€7,500, 2025); LSE salary (£43,277–£51,714, June 2026). Fixed ECB FX, 14 Oct 2026. Employer costs, taxes and success fees excluded; savings not guaranteed.</p></footer>
 </section>;
}
