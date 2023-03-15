function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length;
    const ob = {'1':0, '0': 0, '-1': 0};
    arr.forEach((n)=>{
        if (n>0)
            ob['1'] = ob[1]+1;
        else if (n<0)
            ob['-1'] = ob['-1']+1;
        else
            ob['0'] = ob['0']+1;

    });

    [ob['1']/arrLength, ob['-1']/arrLength, ob['0']/arrLength].forEach((n)=>(
        console.log(n.toFixed(6))
));

}

plusMinus([1, 1, 0, -1, -1])