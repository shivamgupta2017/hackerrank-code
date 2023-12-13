function isUnique(str) {
    str = str.split('').sort();

    for (let i =0;i<str.length-1;i++)
        if(str[i]===str[i+1])
            return false;
    return true;
}

console.log('isUnique', isUnique('aabcdefghi'));