function superReducedString(s) {
    let i = 0;
    while(i<s.length-1) {
        if(s.charAt(i)===s.charAt(i+1)) {
            s = s.substring(0, i)+s.substring(i+2);

            i=0;
        } else {
            i++;
        }
    }
    return s?s:'Empty String';

}

console.log('op->',superReducedString('abba'));
