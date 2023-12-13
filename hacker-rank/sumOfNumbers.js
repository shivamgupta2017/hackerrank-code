const {n,k} = require('./input-sumof-numbers.json');

function findSumOfDigits(digits) {
    let sum = 0;
    const d = digits.toString();
    for (let i =0; i<d.length; i++) {
        sum+=Number(d[i]);
    }
    console.log('sum', sum);
    if(sum>9) {
        return findSumOfDigits(sum);
    }
    return sum;
}

function superDigit(n, k) {
    const sum = findSumOfDigits(n)*k;
    return sum;
}

console.log(superDigit(9875, 4));
//456456