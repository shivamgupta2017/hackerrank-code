const input = require('./input.json').input;
const output = require('./output.json').input;
function arrayToObject(arr) {
    return arr.reduce((previous, current) => {
        if(!(previous[current])) {
            previous[current] = 1;
            return previous;
        }
        previous[current]+=previous[current];
        return previous;
    }, {});
}

function missingNumbers(arr, brr) {
    // Write your code here
    const missingNumbers = [];
    const inputConsolidation = arrayToObject(arr);
    const outputConsolidation = arrayToObject(brr);

    for (let e in outputConsolidation) {

        if(
            (inputConsolidation[e]===undefined)
            ||
            (outputConsolidation[e]>inputConsolidation[e])) {
            missingNumbers.push(e);
        }
    }
    const sortedAssending = missingNumbers.map(s=>Number(s));

    return sortedAssending.sort((a,b)=>a-b);
}


console.log(missingNumbers(input, output));
//2437 2438 2442 2444 2447 2451 2457 2458 2466 2473 2479 2483 2488 2489 2510 2515 2517 2518