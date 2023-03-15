function leftRotation(ar, rotation) {
    for (let i =0;i<rotation;i++) {
        const t = ar.shift();
        ar.push(t);
    }
    return ar;
}

console.log('left rotation -> ', leftRotation([1, 2, 3, 4, 5], 2));
/**
 * 3 4 5 1 2
 */