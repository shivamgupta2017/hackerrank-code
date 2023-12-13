function arrayManipulation(n, queries) {
    let arr = new Array(n-1).fill(0);
    for (let i =0;i<queries.length;i++) {
        const [a, b, k] = queries[i];
        for(let j = a-1 ;j<b; j++) {
            arr[j]+=k;
        }
    }
    return arr;
}

console.log(arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
]));

/**
 * 1 5 3
 * 4 8 7
 * 6 9 1
 */

// 1   2   3   4   5   6   7   8   9   10
//
// 1   2   3   4   5
//             4   5   6   7   8
//                     6   7   8   9
