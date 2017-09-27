// The number of trailing zeros comes from the power of 2 or the power of 5,
// whichever is smaller.
module.exports = function zeros(expression) {
    let resultTwos = 0, resultFives = 0;
    let factorials = expression.split('*');
    for (let factorial of factorials) {
        let number = parseInt(factorial);
        if (factorial[factorial.length - 2] === '!') {
            // !!
            if (number % 2) {
                //resultTwos += countPowerOfDigit(number, 2, true, false);
                resultFives += countPowerOfDigit(number,5, true, false);
            }
            else {
                resultTwos += countPowerOfDigit(number, 2, false, true);
                resultFives += countPowerOfDigit(number, 5, false, true);
            }
        }
        else {
            // !
            resultTwos += countPowerOfDigit(number, 2, false, false);
            resultFives += countPowerOfDigit(number, 5, false, false);
        }
    }
    return Math.min(resultTwos, resultFives);
}

function countPowerOfDigit(number, digit, odd, even) {
    let count = 0, i = 1;
    odd | even ? inc = 2 : inc = 1;
    even ? (i = 2) : i = 1;
    for ( ; i <= number; i += inc) {
        let tmp = i;
        while (!(tmp % digit)) {
            count++;
            tmp = tmp / digit;
        }
    }
    return count;
}
