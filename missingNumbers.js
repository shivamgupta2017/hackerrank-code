const arr = require('./missingNumbersInput1.json').input;
const brr = require('./missingNumbersInput2.json').input;

function missingNumbers(arr, brr) {

    const missingNumbers = [];

    const aArraySorted = arr.sort((a, b)=>(a-b), 0);
    const bArraySorted = brr.sort((a, b)=>(a-b), 0);

    const set = new Set();
    let bIndx =0, aIndx =0;

    while (bIndx<bArraySorted.length || aIndx<aArraySorted.length) {
        if(bArraySorted[bIndx]-aArraySorted[aIndx]===0) {
            bIndx++;
            aIndx++
        } else {
            set.add(bArraySorted[bIndx]);
            bIndx++;
        }
    }


    return Array.from(set);

}

console.log(missingNumbers(arr,
    brr));

// 203 203 204 204 205 205 206 206 207 208
// 203 203 204 204 204 205 205 205 206 206 206 207 208



// 2437 2438 2442 2444 2447 2451 2457 2458 2466 2473 2479 2483 2488 2489 2510 2515 2517 2518
//
//     [
//     '2437', '2438', '2442',
//         '2444', '2447', '2451',
//         '2457', '2458', '2466',
//         '2473', '2479', '2483',
//         '2488', '2489', '2510',
//         '2515', '2517', '2518'
//     ]
