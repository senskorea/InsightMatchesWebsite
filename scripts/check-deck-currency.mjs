import assert from 'node:assert/strict';
import {convert,money,validCurrency} from '../deck/currency.mjs';
assert.equal(convert(1,'EUR','KRW'),1496.54);
assert.equal(convert(1,'EUR','USD'),1.1195);
assert.equal(validCurrency('invalid'),'USD');
for(const c of ['USD','EUR','KRW']){
 assert(Math.abs(convert(convert(2600,'USD',c),c,'USD')-2600)<1e-8);
 assert.equal(Math.round((1-convert(3750,'USD',c)/convert(8396,'USD',c))*100),55);
 assert(!money(93.5e9,'EUR',c,true).includes('NaN'));
}
assert.equal(money(2600,'USD','USD'),'$2,600');
assert.equal(money(3750,'USD','KRW'),'₩5,012,975');
console.log('PASS: currency rates, round trips, formatting and comparison invariance');
