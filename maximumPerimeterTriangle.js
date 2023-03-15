function maximumPerimeterTriangle(sticks) {
    const op = {};
    sticks = sticks.sort((a, b)=>(a-b));
    for(let i =0;i<sticks.length-2;i++) {
        const threeSticks = sticks.slice(i, i+3);
        const [a, b, c] = threeSticks;
        if((a+b>c) && (b+c>a) && (c+a>b)) {
            op[a+b+c] = threeSticks;
        }
    }
    if(!(Object.keys(op).length))
        return [-1];

    const max = Math.max(...Object.keys(op));
    return op[max].sort((a, b)=>a-b);
}

console.log(maximumPerimeterTriangle([3, 9, 2, 15, 3]));