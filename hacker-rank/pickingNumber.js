const arrInput = require('./pickingNumbersInput.json').input;
function pickingNumbers(arr) {
    arr = arr.sort((a, b)=>(a-b));
    let outputArray = [];
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!outputArray.length) {
            outputArray.push(arr[i]);
        } else {
            outputArray.push(arr[i]);
        }
        const diff = arr[i + 1] - outputArray[0];
        if (diff > 1 || isNaN(diff)) {
            if (outputArray.length > maxCount) {
                maxCount = outputArray.length;
            }
            outputArray = [];
        }
    }
    return maxCount;
}

console.log(pickingNumbers(arrInput));
/**
 *
 * [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19]
 */

// 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
// 7, 7, 7, 7, 7, 7, 7, 7, 7, 7
// 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
// 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13
// 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18
// 19, 19, 19, 19, 19, 19, 19, 19, 19

