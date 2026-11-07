import React from 'react';
import {useCurrency} from './currency-context.jsx';
import {convert, offerAmount} from './currency.mjs';

function BenchmarkRow({label, value, lower = 0, upper, maximum, ours = false}) {
  return (
    <div className={'cost-chart-row' + (ours ? ' cost-chart-ours' : '')}>
      <div className="cost-chart-heading"><span>{label}</span><strong>{value}</strong></div>
      <div className="cost-chart-track" aria-hidden="true">
        <span className={lower ? 'cost-chart-interval' : 'cost-chart-bar'}
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
        <p>InsightMatches team support compared with the consultancy survey median.</p>
      </header>
      <div className="cost-chart-sections">
        <section aria-label="Per-proposal cost comparison">
          <h2>Cost per proposal <small>{currency}</small></h2>
          <BenchmarkRow label="Consultancy survey median" value={format(7500, 'EUR')}
            upper={median} maximum={median / .95} />
          <BenchmarkRow label="InsightMatches team support" value={price(3750)}
            upper={teamSupport} maximum={median / .95} ours />
        </section>
        <section aria-label="Annual cost comparison">
          <h2>Annual cost comparison <small>{currency}</small></h2>
          <BenchmarkRow label="Full time Research Grant Application Manager" value={salaryLabel}
            lower={salaryRange[0]} upper={salaryRange[1]} maximum={salaryRange[1] / .95} />
          <BenchmarkRow label="InsightMatches AI Copilot" value={price(2600)}
            upper={copilot} maximum={salaryRange[1] / .95} ours />
        </section>
      </div>
      <footer className="pricing-comparison-footer">
        <p>Per-proposal and annual costs use separate scales, each starting at zero.</p>
        <p>Sources: EC consultancy survey (€7,500 median) and LSE base salary (£43,277 to £51,714). Fixed ECB exchange rates, 14 Oct 2026. Employer costs, taxes and success fees excluded.</p>
      </footer>
    </section>
  );
}
