import React from 'react';
import {useCurrency} from './currency-context.jsx';
import {convert, offerAmount} from './currency.mjs';

const survey = 'https://ec.europa.eu/transparency/documents-register/api/files/SWD%282025%29110_0/090166e525ea7d8b?rendition=false';
const salary = 'https://jobs.lse.ac.uk/Vacancies/W/3508/0/470040/15539/research-grant-application-manager';

export default function PriceBenchmarks() {
  const {currency, format, price} = useCurrency();
  const median = convert(7500, 'EUR', currency);
  const teamSupport = offerAmount(3750, currency);
  const salaryRange = [43277, 51714].map(value => format(value, 'GBP', true)).join('–');

  return (
    <section className="closing-slide pricing-slide benchmark-slide">
      <header>
        <h1>About 55% more affordable.</h1>
        <p>InsightMatches team support compared with the consultancy survey median.</p>
      </header>
      <section className="proposal-fee-chart" aria-label="Proposal fees on a shared scale starting at zero">
        <h2>Cost per proposal <small>{currency}</small></h2>
        <div className="proposal-fee-row">
          <div><a href={survey} target="_blank" rel="noreferrer">Consultancy survey median</a><strong>{format(7500, 'EUR')}</strong></div>
          <div className="proposal-fee-track" aria-hidden="true"><span style={{width: '100%'}} /></div>
        </div>
        <div className="proposal-fee-row team-fee">
          <div><span>InsightMatches team support</span><strong>{price(3750)}</strong></div>
          <div className="proposal-fee-track" aria-hidden="true"><span style={{width: teamSupport / median * 100 + '%'}} /></div>
        </div>
        <div className="proposal-fee-axis" aria-hidden="true"><span>{format(0)}</span><span>{format(7500, 'EUR')}</span></div>
      </section>
      <div className="annual-cost-cards">
        <article><h2>InsightMatches AI Copilot</h2><p><strong>{price(2600)}</strong> per year</p></article>
        <article><h2><a href={salary} target="_blank" rel="noreferrer">Research Grant Application Manager ↗</a></h2><p><strong>{salaryRange}</strong> annual base salary</p></article>
      </div>
      <footer className="pricing-comparison-footer">
        <p>Sources: EC consultancy survey (€7,500 median) and LSE salary benchmark (£43,277–£51,714). Fixed ECB exchange rates, 14 Oct 2026. Employer costs, taxes and success fees excluded.</p>
      </footer>
    </section>
  );
}
