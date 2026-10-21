// ECB reference rates, 14 October 2026. Fixed presentation conversions, not live quotes.
export const rates={USD:1.1195,EUR:1,KRW:1496.54,JPY:177.39,AUD:1.5971};
export const fxSource='https://www.ecb.europa.eu/stats/exchange/eurofxref/shared/pdf/2026/10/20261014.pdf';
export const validCurrency=value=>Object.hasOwn(rates,value)?value:'USD';
export function convert(value,from,to){return value/rates[validCurrency(from)]*rates[validCurrency(to)];}
export function money(value,from,to,compact=false){
 const currency=validCurrency(to),amount=convert(value,from,currency);
 if(currency==='KRW'&&!compact&&Math.abs(amount)>=1e6)return '₩'+(amount/1e6).toFixed(1)+'M';
 return new Intl.NumberFormat('en-US',{style:'currency',currency,notation:compact?'compact':'standard',maximumFractionDigits:compact?1:0}).format(amount);
}
// Round converted offers upwards to clean presentation prices.
export function offerPrice(usd,to){
 const currency=validCurrency(to),step={EUR:100,KRW:100000,JPY:10000,AUD:100}[currency];
 if(!step)return money(usd,'USD',currency);
 const rounded=Math.ceil(convert(usd,'USD',currency)/step)*step;
 return money(rounded,currency,currency);
}
