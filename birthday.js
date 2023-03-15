function birthday(s, d, m) {
    let count = 0;
    for(let i = 0; i< s.length;i++)
        if(d===s.slice(i, i+m).reduce((cumm, curr)=>(cumm+curr), 0))
            count++;
    return count;
}

// 2 2
// 2 1
// 1 3
// 3 2

console.log(birthday([1, 2, 1, 3, 2], 3, 2));