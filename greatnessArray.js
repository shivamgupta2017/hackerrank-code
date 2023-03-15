function findMaximumGreatness(initialArray) {
    let counter=0;
    const unSortedArray = [...initialArray];
    const sortedArray = unSortedArray.sort();
    const newArray = [];
    for (let i =0;i<initialArray.length;i++) {
        const el = initialArray[i];
        let anotherIndx = 0;
        while(sortedArray[anotherIndx] <= el) {
            anotherIndx++;
        }
        if(anotherIndx<sortedArray.length) {
            counter++;
            newArray.push(sortedArray[anotherIndx]);
            sortedArray.splice(anotherIndx, 1);
        } else {
            newArray.push(sortedArray.shift());
        }
    }
    return counter;
}

console.log(greatnessArray([1,3, 5, 2, 1, 3, 1]));


// 1 3 5 2 1 3 1
// 2 5 1 3 3 1 1