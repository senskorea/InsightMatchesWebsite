import React from 'react';

const benefits = [
  ['01', 'Research funding', 'Fund the next stage of your research.', 'Bring your technology into a shared research and development project with international partners.'],
  ['02', 'Industry recognition', 'Help shape your industry.', 'Build recognition through international collaboration, publications, technical roadmaps and standards.'],
  ['03', 'Market entry', 'Open doors to new markets.', 'Connect with research partners, industrial users and potential pilot customers in Europe and beyond.'],
];

export default function ConsortiumBenefits() {
  return (
    <section className="closing-slide pricing-slide consortium-benefits">
      <header><h1>Why join a cross-border<br/>research consortium?</h1><p>Funding, recognition and new international opportunities.</p></header>
      <div className="consortium-benefit-grid">
        {benefits.map(([number, label, title, copy]) => (
          <article key={number}>
            <span className="benefit-number">{number}</span>
            <span className="benefit-label">{label}</span>
            <h2>{title}</h2><p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function NextSteps() {
  return (
    <section className="closing-slide pricing-slide next-steps-slide">
      <header><h1>Next steps.</h1><p>Start with your research priorities.</p></header>
      <div className="next-steps-list">
        {[
          ['01', 'Share your research priorities.', 'Tell us what you’re developing and where you need support.'],
          ['02', 'Explore suitable opportunities.', 'Review funding options and potential research partners together.'],
          ['03', 'Agree the next step.', 'Define the project direction, partner roles and support needed.'],
        ].map(([number, title, copy]) => (
          <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></article>
        ))}
      </div>
      <a className="next-steps-contact" href="mailto:info@insightmatches.com">info@insightmatches.com ↗</a>
    </section>
  );
}
