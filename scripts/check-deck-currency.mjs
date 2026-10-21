import assert from 'node:assert/strict';
import {convert,money,offerPrice,validCurrency} from '../deck/currency.mjs';
assert.equal(convert(1,'EUR','KRW'),1496.54);
assert.equal(convert(1,'EUR','USD'),1.1195);
assert.equal(validCurrency('invalid'),'USD');
assert.equal(convert(1,'EUR','JPY'),177.39);
assert.equal(convert(1,'EUR','AUD'),1.5971);
for(const c of ['USD','EUR','KRW','JPY','AUD']){
 assert(Math.abs(convert(convert(2600,'USD',c),c,'USD')-2600)<1e-8);
 assert.equal(Math.round((1-convert(3750,'USD',c)/convert(8396,'USD',c))*100),55);
 assert(!money(93.5e9,'EUR',c,true).includes('NaN'));
}
assert.equal(money(2600,'USD','USD'),'$2,600');
assert.equal(offerPrice(2600,'EUR'),'€2,400');
assert.equal(offerPrice(3750,'EUR'),'€3,400');
assert.equal(offerPrice(2600,'USD'),'$2,600');
assert.equal(money(2600,'USD','KRW'),'₩3.5M');
assert.equal(money(3750,'USD','KRW'),'₩5.0M');
assert.equal(money(8396,'USD','KRW'),'₩11.2M');
assert.equal(money(500000,'KRW','KRW'),'₩500,000');
assert.equal(offerPrice(2600,'JPY'),'¥420,000');
assert.equal(offerPrice(3750,'JPY'),'¥600,000');
assert.equal(offerPrice(2600,'AUD'),'A$3,800');
assert.equal(offerPrice(3750,'AUD'),'A$5,400');
assert.equal(offerPrice(3750,'KRW'),'₩5.1M');
console.log('PASS: currency rates, round trips, formatting and comparison invariance');
