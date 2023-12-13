const input = require('./balance-input.json');

function balancedSums(arr) {
    const sum = arr.reduce((consolidated, current)=>(consolidated+current), 0);
    let sumSoFar = 0;
    for (let i =0;i<arr.length;i++) {

        if(sum-arr[i]-sumSoFar===sumSoFar)
            return 'YES';
        sumSoFar+=arr[i];
    }
    return 'NO';
}

console.log(balancedSums(input.input));