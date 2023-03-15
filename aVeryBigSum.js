function aVeryBigSum(s) {
    return s.reduce((commulative, current)=>(commulative+current));
}


console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));