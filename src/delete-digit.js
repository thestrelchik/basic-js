const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n += '';
let numArray = Array.from(n);
let result=0;
let newResult;

for(let i=0; i<numArray.length; i++) {
  delete numArray[i];
  str = numArray.join('');
  newResult = Number(str)
  if(newResult>result) {
    result = newResult;
  }
  numArray = Array.from(n);
}
return result;
}

module.exports = {
  deleteDigit
};
