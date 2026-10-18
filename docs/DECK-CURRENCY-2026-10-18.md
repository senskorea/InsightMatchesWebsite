# Currency selector and publication

USD remains the pricing source of truth. EUR and KRW are converted display estimates, not new commercial offers. Funding programme amounts originate in EUR. Fixed ECB reference rates for 14 October 2026: EUR 1 = USD 1.1195 = KRW 1496.54.

Source: https://www.ecb.europa.eu/stats/exchange/eurofxref/shared/pdf/2026/10/20261014.pdf

The outer presentation selector dispatches a same-origin event to the canvas context without reloading it or resetting the slide. Default USD; optional initial currency query parameter. Selection lasts for the current page session. No exchange-rate API, credentials or storage required. Embedded screenshots retain their original text and currencies.

Validation: build, deck ESLint, deck integration and currency calculations. Browser verified EUR/KRW switching, unchanged active slide, funding amounts and pricing layout. Comparison percentage is currency invariant. Previously recorded limitations remain: demo/profile placeholders and unavailable mailing destination; this change does not implement mailing signup.

User requested publication of the reviewed deck including this selector. No homepage, auth, database or payment changes.
