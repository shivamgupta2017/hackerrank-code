'use strict';
function hourglassSum(arr) {
    let maxSum = 0;
    for (let row = 0; row<arr.length-2; row++) {

        for(let col = 0; col<arr[row].length-2; col++) {
            let sum =0;

            for(let currRow = row; currRow<(row+3); currRow++) {
                for (let currCol = col; currCol<(col+3); currCol++) {
                    sum+=arr[currRow][currCol];
                    console.log('->', arr[currRow][currCol]);
                }
            }

            console.log('\n', sum);
            console.log('\n\n\n');
            if(sum>maxSum) {
                maxSum = sum;
            }

        }
    }
    return maxSum;

}

console.log('max hourglassSum->', hourglassSum(
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 9, 2, -4, -4, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, -1, -2, -4, 0],
    ]
));