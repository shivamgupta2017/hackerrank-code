function findALLSubstrings(allCharacters) {
    allCharacters = allCharacters.split('');
    let outer = 0;
    const substringArray = [];
    while (outer<allCharacters.length) {
        let inner = outer+1;
        while(inner<allCharacters.length) {
            /**
             * 01 02 03 04
             * 12 13 14
             * 23 24
             * 34
             */
            substringArray.push([allCharacters[outer], allCharacters[inner]]);
            inner++;
        }
        outer++;
    }
    return substringArray;
}

function validateString(s) {
    const splittedChar = s.split('');
    const firstCharacter = splittedChar[0];
    const secondCharacter = splittedChar[1];
    for (let i =0;i<splittedChar.length;i++) {
        if(i%2===0 && splittedChar[i]!==firstCharacter) {
            return 0;
        } else if(i%2!==0 && splittedChar[i]!==secondCharacter) {
            return 0
        }

    }
    return splittedChar.length;
}

function alternate(s) {
    const set = Array.from(new Set(s)).join('');
    const substrings = findALLSubstrings(set);
    let indx = 0;
    let maxCount = 0;

    while(indx<substrings.length) {
        let removedStrings = s;
        const keys = substrings[indx];
        const regExp1 = new RegExp(keys[0], 'g');
        const regExp2 = new RegExp(keys[1], 'g');
        const p = set.replace(regExp1, '').replace(regExp2, '');

        for (let i = 0;i<p.length;i++) {
            const r = new RegExp(p[i], 'g');
            removedStrings = removedStrings.replace(r, '');
        }
        let validCount = validateString(removedStrings);
        if(validCount && validCount>maxCount) {
            maxCount = validCount;
        }
        indx++;
    }
    return maxCount;

}

console.log(alternate('beabeefeab'));