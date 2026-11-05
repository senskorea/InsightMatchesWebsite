import React from 'react';
import {useCurrency} from './currency-context.jsx';

const projects = [
  {
    name: 'CodER',
    role: 'Coordinator',
    budget: 216246,
    output: 'A virtual escape-room platform and teaching materials for coding and microcontrollers.',
    source: 'https://akmi-international.com/projects/coder/',
  },
  {
    name: 'FemPower',
    role: 'Partner',
    budget: 379829,
    output: 'Research and practical guidance on gender equality in clean energy and higher education.',
    source: 'https://www.iky.gr/wp-content/uploads/2022/03/TomeasAnotatis_KA220_Egkekrimena.pdf',
  },
  {
    name: 'DEEDU',
    role: 'Coordinator',
    output: 'Open-source toolkits for environmental monitoring, automated gardening and energy use.',
    source: 'https://www.salto-youth.net/tools/toolbox/tool/digital-environmental-education.2821/',
  },
];

export default function DigijeunesPortfolio() {
  const {currency, format} = useCurrency();
  const total = projects.reduce((sum, project) => sum + (project.budget ?? 0), 0);

  return <section className="closing-slide pricing-slide digijeunes-slide">
    <header>
      <span className="tier-number">Past project experience · Digijeunes</span>
      <h1>What European funding helped deliver.</h1>
      <p><strong>{currency !== 'EUR' && '≈'}{format(total, 'EUR')}</strong> in combined project budgets across CodER and FemPower.</p>
    </header>
    <div className="digijeunes-projects">
      {projects.map(project => <article key={project.name}>
        <span className="tier-number">Digijeunes · {project.role}</span>
        <h2>{project.name}</h2>
        <p className="digijeunes-budget">{project.budget ? <>{currency !== 'EUR' && '≈'}{format(project.budget, 'EUR')}</> : 'Erasmus+ co-funded'}</p>
        <p>{project.output}</p>
        <a href={project.source} target="_blank" rel="noreferrer">Project source ↗</a>
      </article>)}
    </div>
    <p className="digijeunes-note">Figures cover all partners in the two projects. The total excludes DEEDU.{currency !== 'EUR' && ' Fixed ECB conversion, 14 October 2026.'}</p>
  </section>;
}
