type Combinable = number | string;
type ConversionDesriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDesriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === 'as-number') {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combineAges = combine(30, 26, 'as-number');
const combineStringAges = combine('30', '26', 'as-number');
const combineNames = combine('max', 'anna', 'as-text');

console.log(combineAges);
console.log(combineStringAges);
