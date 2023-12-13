function mergeBothLeftAndRight(left, right) {
    let minimumIndx1 = 0, minimumIndx2 = 0;
    let main = [];
    let currentIndxLeft = 0, currentIndxRight = 0;

    while(currentIndxLeft<left.length && currentIndxRight<right.length) {

        if (left[currentIndxLeft]<right[currentIndxRight]) {
            main.push(left[currentIndxLeft]);
            currentIndxLeft++;
        } else {
            main.push(right[currentIndxRight]);
            currentIndxRight++;
        }
    }

    while (currentIndxLeft<left.length) {
        main.push(left[currentIndxLeft]);
        currentIndxLeft++;
    }

    while(currentIndxRight<right.length) {
        main.push(left[currentIndxRight]);
        currentIndxRight++;
    }

    console.log('->>>', main);
    return main;
}

function callRecursiveFunction(arr) {

    if (arr.length===1) {
        return arr;
    }
    const mid = arr.length/2;
    const left = callRecursiveFunction(arr.slice(0, mid));
    const right = callRecursiveFunction(arr.slice(mid));
    const mergeLeftRight = mergeBothLeftAndRight(left, right);
    return mergeLeftRight;
}

function mergeSort(arr) {
   return callRecursiveFunction(arr);
}


console.log('merge sort -> ', mergeSort([4, 2, 3, 1]));
/**
 *
 * 2 4 ------------- 1 3
 *
 *
 *
 *
 */
