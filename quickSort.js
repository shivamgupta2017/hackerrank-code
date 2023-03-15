function partition (arr, leftIndx, rightIndx) {
    let pivotIndx = leftIndx;
    leftIndx+=1;
    while (leftIndx<=rightIndx) {
        if(arr[leftIndx]>arr[pivotIndx] && arr[rightIndx]<arr[pivotIndx]) {
            const temp = arr[leftIndx];
            arr[leftIndx] = arr[rightIndx];
            arr[rightIndx]= temp;
            leftIndx++;
            rightIndx--;
        } else if(arr[leftIndx]<arr[pivotIndx]) {
            leftIndx++;
        } else if(arr[rightIndx]>arr[pivotIndx]) {
            rightIndx--;
        }
    }
    const temp = arr[rightIndx];
    arr[rightIndx] = arr[pivotIndx];
    arr[pivotIndx] = temp;
    return rightIndx;

}

function quickSort(arr, leftIndx, rightIndx) {
    if(leftIndx<rightIndx) {
    const partitionIndx = partition(arr, leftIndx, rightIndx);
        quickSort(arr, leftIndx, partitionIndx-1);
        quickSort(arr, partitionIndx+1, rightIndx);
    }

    return arr;
}


console.log('quick sort ->', quickSort([10, 15, 2, 20, 5], 0, 4));
// 5 2 10 15 20
//  1 1 -> 5 2
