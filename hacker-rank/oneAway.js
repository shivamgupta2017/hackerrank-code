const str1 = 'pale', str2 = 'ple';
// aelp
// elp

function oneAway(str1, str2) {
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    if(str1 === str2) {
        return true;
    }
    let i = 0, counter = 0;
    while (i<str1.length) {
        const char = str1.charAt(i);
        if (str2.indexOf(char)>=0) {
            const indx = str2.indexOf((char));
            str2 = str2.substring(0, indx)+str2.substring(indx+1);
            str1 = str1.substring(0, i)+str1.substring(i+1);
        } else {
            i++;
            counter++;
        }

    }
    return counter>1? false: true;
}

console.log('output->', oneAway(str1, str2));
