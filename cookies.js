function cookies(k, a) {
    a = a.sort((a,b)=>a-b);
    let counter = 0;
    while (a[0]<k) {
        if (a.length<2) {
            return -1;
        }

        const [least, secondLeast] = a.splice(0, 2);
        a.push(least+2*secondLeast);
        a = a.sort((a,b)=>a-b);

        counter++;

    }
    return counter;
}

console.log(cookies(7, [1, 2, 3, 9, 10, 12]));
/**
 * 1 1 1
 * 1 3
 * 7
 *
 */

