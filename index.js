function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    let minNumbersOfCharsToAdd = 0;
    const allRegex = [/[0-9]+/g, /[a-z]+/g, /[A-Z]+/g, /([!@#$%^&*()\-\+])+/g];

    allRegex.forEach((reg)=>{
        if(!reg.test(password)) {
            minNumbersOfCharsToAdd++;
        }
    });

    
    return minNumbersOfCharsToAdd;

}
minimumNumber(7, '4700');
