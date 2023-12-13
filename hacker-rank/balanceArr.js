const inputArray = require('./balance-input.json').input;

function balancedSums(arr) {

    const sum = arr.reduce((prev, curr)=>(prev+curr), 0);
    let tempSum = 0;
    for(let indx = 0;indx<arr.length;indx++) {
        // sum - arr[indx] - tempSum
        if((sum-arr[indx]-tempSum)===0) {
            console.log('sum-arr[indx]-tempSum', sum-arr[indx]-tempSum);
            return "YES";
        }
        tempSum+=arr[indx];

    }
    return "NO";

}

console.log(balancedSums([1, 2, 3, 4]));
