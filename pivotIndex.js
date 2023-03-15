function pivotIndex(arr) {
    const sum = arr.reduce((prev, curr)=>(prev+curr), 0);
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        for(let j =0;j<i;j++) {
            sumLeft+=arr[j];
        }
        if(sum - sumLeft - arr[i] === sumLeft) {
            return i;
        }
    }
}

console.log(pivotIndex([1,7,3,6,5,6]));
// 28
