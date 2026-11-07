import React from 'react';
import {useCurrency} from './currency-context.jsx';
import {convert, offerAmount} from './currency.mjs';

function ComparisonMeasure({label, value, basis, lower = 0, upper, maximum, interval = false, ours = false}) {
  return (
    <div className={'comparison-measure' + (ours ? ' comparison-measure-ours' : '')}>
      <div className="comparison-heading">
        <div><h3>{label}</h3><span className="comparison-basis">{basis}</span></div>
        <strong className="comparison-value">{value}</strong>
      </div>
      <div className="comparison-track" aria-hidden="true">
        <span className={interval ? 'comparison-interval' : undefined}
          style={{left: lower / maximum * 100 + '%', width: (upper - lower) / maximum * 100 + '%'}} />
      </div>
    </div>
  );
}

export default function PriceBenchmarks() {
  const {currency, format, price} = useCurrency();
  const median = convert(7500, 'EUR', currency);
  const teamSupport = offerAmount(3750, currency);
  const salaryRange = [43277, 51714].map(value => convert(value, 'GBP', currency));
  const salaryLabel = [43277, 51714].map(value => format(value, 'GBP')).join(' to ');
  const copilot = offerAmount(2600, currency);

  return (
    <section className="closing-slide pricing-slide benchmark-slide">
      <header>
        <h1>About 55% more affordable.</h1>
        <p>Maximum team-support fee compared with the consultancy survey median.</p>
      </header>
      <div className="support-comparison">
        <ComparisonMeasure label="Consultancy survey median" value={format(7500, 'EUR')} basis="Per proposal"
          upper={median} maximum={median / .95} />
        <section className="comparison-offers" aria-label="InsightMatches">
          <h2>InsightMatches</h2>
          <ComparisonMeasure label="Team support" value={[price(0), price(3750)].join(' to ')} basis="Per proposal"
            upper={teamSupport} maximum={median / .95} interval ours />
          <ComparisonMeasure label="AI Copilot" value={price(2600)} basis="Annual subscription"
            upper={copilot} maximum={salaryRange[1] / .95} ours />
        </section>
        <ComparisonMeasure label="Full time Research Grant Application Manager" value={salaryLabel} basis="Annual base salary"
          lower={salaryRange[0]} upper={salaryRange[1]} maximum={salaryRange[1] / .95} interval />
      </div>
      <footer className="pricing-comparison-footer">
        <p>{currency} · Per-proposal and annual costs use separate scales, each starting at zero.</p>
        <p>Sources: EC consultancy survey (€7,500 median) and LSE base salary (£43,277 to £51,714). Fixed ECB exchange rates, 14 Oct 2026. Employer costs, taxes and success fees excluded.</p>
      </footer>
    </section>
  );
}
