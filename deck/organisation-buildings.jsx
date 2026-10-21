import React from 'react';
// The same 240 Korea particles form the buildings; faint edges only suggest depth.
const line=(...points)=>points;
const rect=(x,y,w,h)=>line([x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]);
const buildings=[
 {label:'Universities',offset:30,edges:[line([25,270],[90,220],[155,270],[25,270]),line([90,220],[122,200],[187,250],[155,270]),line([155,270],[155,390],[187,370],[187,250]),line([25,270],[25,390],[155,390]),line([38,284],[142,284]),...Array.from({length:4},(_,i)=>rect(40+i*28,286,13,96)),line([18,390],[162,390],[162,400],[8,400],[8,412],[172,412],[204,392]),line([8,412],[8,422],[172,422],[204,402],[204,392]),line([172,412],[172,422]),line([73,250],[90,238],[107,250])]},
 {label:'Research institutes',offset:250,edges:[rect(20,282,130,120),line([150,282],[185,259],[185,379],[150,402]),line([20,282],[55,259],[185,259]),rect(40,243,86,39),line([40,243],[69,225],[155,225],[126,243]),line([155,225],[155,259]),...Array.from({length:3},(_,i)=>line([37+i*32,294],[37+i*32,358])),line([26,325],[143,325]),line([20,365],[150,365]),rect(67,369,32,33),line([162,288],[162,363]),line([174,280],[174,355]),line([155,321],[180,305]),line([76,250],[76,259],[68,274],[98,274],[90,259],[90,250]),line([73,267],[93,267]),line([10,405],[150,405],[194,378])]},
 {label:'Private companies',offset:470,edges:[rect(45,195,95,207),line([45,195],[82,171],[177,171],[177,378],[140,402]),line([140,195],[177,171]),line([100,174],[100,153],[122,153],[122,171]),...Array.from({length:5},(_,row)=>line([52,222+row*32],[134,222+row*32])),...Array.from({length:3},(_,col)=>line([65+col*25,205],[65+col*25,367])),line([151,200],[151,380]),line([165,190],[165,370]),...Array.from({length:5},(_,row)=>line([143,220+row*32],[174,200+row*32])),rect(79,372,27,30),line([34,406],[143,406],[187,379])]},
 {label:'Deep tech startups',offset:690,edges:[line([20,303],[75,251],[145,303],[20,303],[20,402],[145,402],[145,303]),line([75,251],[110,228],[180,280],[180,379],[145,402]),line([145,303],[180,280]),rect(35,328,40,38),rect(95,332,32,70),rect(48,339,14,14),line([55,339],[55,331]),line([55,353],[55,361]),line([48,346],[40,346]),line([62,346],[70,346]),line([155,315],[171,305],[171,340],[155,350],[155,315]),line([34,402],[34,386],[60,386],[60,402]),line([9,407],[148,407],[190,379]),line([89,274],[105,263],[122,274],[107,285],[89,274]),line([107,285],[107,293])]},
];
function segments(building){return building.edges.flatMap(path=>path.slice(1).map((p,i)=>({a:path[i],b:p,length:Math.hypot(p[0]-path[i][0],p[1]-path[i][1])})));}
function sample(building,t){const edges=segments(building);let distance=t*edges.reduce((sum,e)=>sum+e.length,0);for(const {a,b,length} of edges){if(distance<=length){const k=distance/length;return [building.offset+a[0]+k*(b[0]-a[0]),a[1]+k*(b[1]-a[1])]}distance-=length}return [building.offset+edges.at(-1).b[0],edges.at(-1).b[1]];}
export const organisationPoints=buildings.flatMap(b=>Array.from({length:60},(_,i)=>sample(b,i/60)));
export default function OrganisationBuildings(){return <svg viewBox="0 0 940 620" role="img" aria-label="Universities, research institutes, private companies and deep tech startups">
 {buildings.map((b,i)=><g key={b.label}>
  <g transform={'translate('+b.offset+' 0)'} strokeLinejoin="round" strokeLinecap="round">
   {b.edges.slice(0,4).map((path,j)=><polyline key={j} points={path.map(p=>p.join(',')).join(' ')} fill="none" stroke="#079fe3" strokeWidth=".8" opacity=".24"/>)}
  </g>
  <text x={145+i*220} y="480" textAnchor="middle" fontSize="22" fill="#13202d">{b.label}</text>
 </g>)}
 </svg>}
