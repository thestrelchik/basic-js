const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  n = n.toString();
    n = n.split('');

    let sum = 0;
    if (n.length != 1) {
      
        for (let i = 0; i < n.length; i++) {
            sum += n[i] << 0;
        }

        return getSumOfDigits(sum);
        
    } else if (n.length == 1) {

      sum = n.join('');
      sum = Number(sum);
      return sum
    }
}

module.exports = {
  getSumOfDigits
};
