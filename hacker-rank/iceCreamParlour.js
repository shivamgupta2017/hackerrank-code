function icecreamParlor(m, arr) {
    // arr = arr.sort((a, b)=>a-b);
    for (let i =0;i<arr.length-1;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(m===(arr[i]+arr[j]))
                return [i, j].map((e)=>e+1);
        }
    }

}

console.log(icecreamParlor(4, [2, 2, 4, 3]));