const arr = [5,4,3,2,1];

function closestNumbers(arr) {
    arr = arr.sort((a, b)=>a-b);
    const diffObject = {};
    for (let i =0;i<arr.length-1;i++) {
        const diff = arr[i+1]-arr[i];
        if(!diffObject[diff])
            diffObject[diff]=[];
        diffObject[diff].push(arr[i]);
        diffObject[diff].push(arr[i+1]);
    }
    const keysArray = Object.keys(diffObject).map((e)=>(parseInt(e))).sort((a, b)=>(a-b));
    return diffObject[keysArray];
}

closestNumbers(arr);