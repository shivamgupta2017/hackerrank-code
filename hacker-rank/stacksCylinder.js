function sum(h) {
    return h.reduce((current, commulative)=>(current+commulative), 0);
}
function equalStacks(h1, h2, h3) {
    let sumH1 = sum(h1);
    let sumH2 = sum(h2);
    let sumH3 = sum(h3);
    let minimum = Math.min(sumH1, sumH2, sumH3);
    while (sumH1>minimum || sumH2>minimum || sumH3>minimum) {
        if(sumH1>minimum) {
            sumH1-=h1.shift();
        }
        if(sumH2>minimum) {
            sumH2-=h2.shift();
        }
        if(sumH3>minimum) {
            sumH3-=h3.shift();
        }
        minimum = Math.min(sumH1, sumH2, sumH3);
    }
    return minimum;
}

console.log('equal cylinder ->', equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));