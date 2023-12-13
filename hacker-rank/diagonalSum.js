function diagonalDifference(arr) {
    const length = arr.length;
    let leftIndx = 0, rightIndx = length-1;
    let leftSum = 0, rightSum = 0;
    //  00 11 22
    //  02 11 20
    while(leftIndx<arr.length && rightIndx>=0) {
        leftSum+=arr[leftIndx][leftIndx];
        rightSum+=arr[length-1-rightIndx][rightIndx];
        leftIndx++;
        rightIndx--;
    }
    return Math.abs(leftSum-rightSum);
}

console.log(diagonalDifference(
    [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]
));