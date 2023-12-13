function factorial(n) {

    if(n===1) return 1;

    const f = n*factorial(n-1);
    console.log('f->', f);
    return f;
}

console.log('factorial -> ', factorial(5));