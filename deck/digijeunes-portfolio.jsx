import React from 'react';
import {useCurrency} from './currency-context.jsx';

const projects = [
  {
    name: 'CodER',
    role: 'Coordinator',
    consortium: '6 organisations across 4 countries',
    partners: [
      ['Citizens in Power', 'Citizens_in_Power_Primary_Vector.svg'],
      ['CHALLEDU', 'Challedu_Primary_Horizontal.jpg'],
    ],
    budget: 216246,
    output: 'A virtual escape-room platform and teaching materials for coding and microcontrollers.',
    source: 'https://akmi-international.com/projects/coder/',
  },
  {
    name: 'FemPower',
    role: 'Partner',
    consortium: '9 organisations across 7 countries',
    partners: [
      ['Politecnico di Milano', 'Politecnico_di_Milano_Primary_Wordmark.svg'],
      ['TU Delft', 'TU_Delft_Primary_Seal_Vector.svg'],
      ['Diotima', 'Diotima_Center_Primary_Horizontal.png'],
    ],
    budget: 379829,
    output: 'Research and practical guidance on gender equality in clean energy and higher education.',
    source: 'https://www.iky.gr/wp-content/uploads/2022/03/TomeasAnotatis_KA220_Egkekrimena.pdf',
  },
  {
    name: 'DEEDU',
    role: 'Coordinator',
    consortium: '4 organisations across 4 countries',
    partnerNames: 'HorizonLab, Filtrator and EDUcentrum',
    output: 'Open-source toolkits for environmental monitoring, automated gardening and energy use.',
    source: 'https://www.salto-youth.net/tools/toolbox/tool/digital-environmental-education.2821/',
  },
];

export default function DigijeunesPortfolio() {
  const {currency, format} = useCurrency();
  const total = projects.reduce((sum, project) => sum + (project.budget ?? 0), 0);

  return <section className="closing-slide pricing-slide digijeunes-slide">
    <header>
      <span className="tier-number">Erasmus+ collaborations</span>
      <h1>Case studies</h1>
      <p className="digijeunes-subtitle">Past project experience at Digijeunes</p>
      <p><strong>{currency !== 'EUR' && '≈'}{format(total, 'EUR')}</strong> in combined project budgets across CodER and FemPower.</p>
    </header>
    <div className="digijeunes-projects">
      {projects.map(project => <article key={project.name}>
        <span className="tier-number">Digijeunes · {project.role}</span>
        <h2>{project.name}</h2>
        <p className="digijeunes-budget">{project.budget ? <>{currency !== 'EUR' && '≈'}{format(project.budget, 'EUR')}</> : 'Erasmus+ co-funded'}</p>
        <p>{project.output}</p>
        <div className="digijeunes-partners">
          <p><strong>{project.consortium}</strong></p>
          {project.partners ? <div className="digijeunes-partner-logos" aria-label="Selected project partners">
            {project.partners.map(([name, file]) => <img key={name} alt={name} src={'/deck-assets/digijeunes/' + file}/>)}
          </div> : <p>{project.partnerNames}</p>}
        </div>
        <a href={project.source} target="_blank" rel="noreferrer">Project source ↗</a>
      </article>)}
    </div>
    <p className="digijeunes-note">Figures cover all partners in the two projects. The total excludes DEEDU.{currency !== 'EUR' && ' Fixed ECB conversion, 14 October 2026.'}</p>
  </section>;
}
