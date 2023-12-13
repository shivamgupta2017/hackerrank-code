


function theRecursiveSum(s, indx) {
    if(indx<s.length-1) {
       const sum = theRecursiveSum(s, indx+1);
       return sum+s[indx];
    } else {
        return s[indx];
    }

}

console.log(theRecursiveSum([1, 2, 3, 4, 5], 0));