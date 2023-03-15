function zigzagSequence(arr) {
    const n = arr.length;
    arr = arr.sort((a, b)=>(a-b));
    const k = (n+1)/2;
    console.log('mid ->', k);
    // mid is second last.


   // 1 2 3 4 5
   // 1 2 3 5 4 

    // 1 2 3 4 5 6 7
    // 1 2 3 7 6 5 4
    /**
     * 1 2 5 4 3
     *
     *
     */
}

console.log(zigzagSequence([1, 2, 3, 4, 5]));
// 1 2 5 4 3