function getMinimumOf3(a, b, c) {
    return Math.min(a, b, c);
}
function manageSum(a, b ,c, d, e, f, g) {
    const d1= new Date();
    let findTargetToMake = getMinimumOf3(a, b, c);
    let stepsCounter = 0;
    while(a>findTargetToMake || b>findTargetToMake || c>findTargetToMake) {
        if(a>findTargetToMake) {
            a--;
        }

        if(b>findTargetToMake) {
            b--;
        }

        if(c>findTargetToMake) {
            c--;
        }
        stepsCounter++;
        findTargetToMake = getMinimumOf3(a, b, c);

    }

    const d2 = new Date();
    console.log('d-2-', d2.getMilliseconds());
    console.log('d-1-', d1.getMilliseconds());
    return (d2.getTime()-d1.getTime());
}

function manageSumCopy(a, b, c) {
    const d1 =new Date();
    const min = Math.min(a, b, c);
    const max = Math.max(a, b, c);
    const d2 =new Date();
    return d2.getTime()-d1.getTime();
    // return max-min;
}
console.log('lets find out how long it took to execute -> ', manageSumCopy(25, 50, 100));

/**
 *
 * 1 2 1 1  = 4 -[1 element] = 3 - [1 element]
 * 1 1 2 = 4 - [1 element] = 3 -1 [1 element]
 * 1 1 = 2 - 0 [element]  = 2 - 0 [element]
 *
 *
 * 4 4 2
 *
 * 3 2 1 1 1 = 8
 * 4 3 2 = 9
 * 1 1 4 1= 7
 *
 *
 */