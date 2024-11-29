//const assert = require('assert');
import assert from 'assert';

const fmt = ([label, unit], price) => `${label}${price.toLocalString().padStart(9)}${unit}}`;

const total = {price: 45000, vat: 4500};

/* console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
 */

