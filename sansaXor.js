function sansaXor(arr) {
    if (arr.length%2===0) {
        return 0;
    }
    return eval(arr.filter((val, indx)=>(indx%2===0)).join('^'));
}
const arr = [3, 4, 5];
console.log(sansaXor(arr))