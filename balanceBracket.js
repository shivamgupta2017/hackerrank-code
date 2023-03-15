function isBalanced(s) {
    let i =0;

    while (i < s.length-1) {
        if(s.charAt(i)==='{' && s.charAt(i+1)==='}') {
            s = s.substring(0, i)+s.substring(i+2);
            i--;
        }
        else if(s.charAt(i)==='[' && s.charAt(i+1)===']') {
            s = s.substring(0, i)+s.substring(i+2);
            i--;
        }
        else if(s.charAt(i)==='(' && s.charAt(i+1)===')') {
            s = s.substring(0, i)+s.substring(i+2);
            i--;
        }
        else {
            i++;
        }
        console.log('->', s);
    }
    return s? 'NO':'YES';
}

console.log(isBalanced('{{[[(())]]}}'));

//beabeefeab
