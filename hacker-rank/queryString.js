function matchingStrings(strings, queries) {
    const count = {};
    for (let i =0;i<strings.length;i++) {
        if(!count[strings[i]]) {
            count[strings[i]] = 1;
        } else {
            count[strings[i]] = count[strings[i]]+1;
        }
    }
    const output = [];
    for (let i =0;i<queries.length;i++) {
        const q = queries[i];
        output.push(count[q]? count[q]: 0);
    }
    return output;
}

console.log('matching string -', matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));