function stairCase(n) {
    let s= '';
    for (let i=0;i<5;i++) {
        for (let j=n-1-i;j>=0;j--) {
            s+=' ';
        }
        for (let k =0;k<=i;k++) {
            s+='*';
        }
        s+='\n';
    }
    return s;
}

console.log(stairCase(5));