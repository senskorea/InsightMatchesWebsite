// Presentation planning assumptions in person-hours. Not a measured product benchmark.
// Idea development means shaping an existing research idea into a proposal concept.
export const preparationEffort=[
 {label:'Find funding',before:20,after:3},
 {label:'Develop the idea',before:5,after:2},
 {label:'Build the team',before:40,after:15},
 {label:'Plan the project',before:40,after:12},
 {label:'Prepare the draft',before:60,after:20}
];
export const preparationTotal=preparationEffort.reduce((sum,s)=>sum+s.before,0);
export const assistedTotal=preparationEffort.reduce((sum,s)=>sum+s.after,0);
export const preparationSaved=preparationTotal-assistedTotal;
export const preparationReduction=((1-assistedTotal/preparationTotal)*100).toFixed(1);
