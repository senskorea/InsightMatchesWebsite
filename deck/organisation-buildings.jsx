import React from 'react';
// Sampled outlines keep the same 240 particles as the Korea scene.
const buildings=[
 {label:'Universities',path:[[65,420],[65,260],[145,205],[225,260],[65,260],[225,260],[225,420],[65,420],[100,420],[100,280],[130,280],[130,420],[160,420],[160,280],[190,280],[190,420],[225,420]]},
 {label:'Research institutes',path:[[285,420],[285,235],[445,235],[445,420],[285,420],[315,420],[315,265],[340,265],[340,340],[390,340],[390,265],[415,265],[415,420],[365,420],[365,365],[340,365],[340,420]]},
 {label:'Private companies',path:[[505,420],[505,190],[665,190],[665,420],[505,420],[535,420],[535,220],[555,220],[555,385],[585,385],[585,220],[605,220],[605,385],[635,385],[635,220],[650,220],[650,420]]},
 {label:'Deep tech startups',path:[[725,420],[725,280],[805,225],[885,280],[885,420],[725,420],[760,420],[760,320],[790,320],[790,360],[820,360],[820,320],[850,320],[850,420],[805,420],[805,385],[775,385],[775,420]]}
];
function sample(path,t){
 const lengths=path.slice(1).map((p,i)=>Math.hypot(p[0]-path[i][0],p[1]-path[i][1]));
 let distance=t*lengths.reduce((a,b)=>a+b,0);
 for(let i=0;i<lengths.length;i++){if(distance<=lengths[i]){const k=distance/lengths[i];return [path[i][0]+k*(path[i+1][0]-path[i][0]),path[i][1]+k*(path[i+1][1]-path[i][1])]}distance-=lengths[i]}
 return path.at(-1);
}
export const organisationPoints=buildings.flatMap(b=>Array.from({length:60},(_,i)=>sample(b.path,i/60)));
export default function OrganisationBuildings(){return <svg viewBox="0 0 940 620" role="img" aria-label="Universities, research institutes, private companies and deep tech startups">
 {buildings.map((b,i)=><g key={b.label}><polyline points={b.path.map(p=>p.join(',')).join(' ')} fill="none" stroke="#079fe3" strokeOpacity=".25" strokeWidth="2" strokeLinejoin="round"/><text x={145+i*220} y="475" textAnchor="middle" fontSize="22" fill="#13202d">{b.label}</text></g>)}

 </svg>}
