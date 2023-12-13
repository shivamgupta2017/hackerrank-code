function sherlockAndAnagrams(s) {
    const substrings = [];
    for(let i =0;i<s.length;i++) {
        for(let j =i+1;j<=s.length;j++) {
            substrings.push(s.slice(i, j));
        }
    }
    let i =0, counter = 0;
    while(i<substrings.length) {
        const element = substrings.shift();
        const indx = substrings.indexOf(element.split('').reverse().join(''));
        if(indx>=0) {
            substrings.splice(indx, 1);
            counter++;
        } else {
            i++;
        }
    }
    return counter;
}

console.log(sherlockAndAnagrams('kkkk'));