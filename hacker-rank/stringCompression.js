function stringCompression(input) {
    let outputString = '';
    let indx = 0 ;
    while(indx<input.length) {
        const char = input.charAt(indx);
        let counter = 0;
        while(char===input.charAt(indx)) {
            counter++;
            indx++;
        }
        outputString=outputString+char+counter;
    }
    return outputString;

}

console.log('string compression -> ', stringCompression('Shivam Gupta'))