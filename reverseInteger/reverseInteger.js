/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const arrayOfNumber = x.toString().split('');
    let sign = '';
    let justNumber;
    if (arrayOfNumber[0] === '-') {
        sign = arrayOfNumber.slice(0, 1);
        justNumber = arrayOfNumber.slice(1);
    } else {
        justNumber = arrayOfNumber.slice(0)
    }

    let reverseNumber = Number(sign + justNumber.reverse().join(''))
    if (Math.pow(-2, 31) >= reverseNumber || reverseNumber >= Math.pow(2, 31) - 1) {
        return 0;
    }
    return reverseNumber;
};

console.log(reverse(123456789));