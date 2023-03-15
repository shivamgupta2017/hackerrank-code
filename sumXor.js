function sumXor(n) {
    let counter = 0 ;
    if(n===0) {
        return 1;
    }
    counter++;
    for (let i = 1;i<n;i++) {
        if((n+i)===(n^i)) {
            counter++;
        };
    }
    return counter;
}

console.log('n->', sumXor(100));