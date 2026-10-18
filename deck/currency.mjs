// ECB reference rates, 14 October 2026. Fixed presentation conversions, not live quotes.
export const rates={USD:1.1195,EUR:1,KRW:1496.54};
export const fxSource='https://www.ecb.europa.eu/stats/exchange/eurofxref/shared/pdf/2026/10/20261014.pdf';
export const validCurrency=value=>Object.hasOwn(rates,value)?value:'USD';
export function convert(value,from,to){return value/rates[validCurrency(from)]*rates[validCurrency(to)];}
export function money(value,from,to,compact=false){
 const currency=validCurrency(to),amount=convert(value,from,currency);
 return new Intl.NumberFormat('en-US',{style:'currency',currency,notation:compact?'compact':'standard',maximumFractionDigits:compact?1:0}).format(amount);
}
