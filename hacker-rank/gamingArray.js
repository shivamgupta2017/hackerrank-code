const participants = {
    '0': 'BOB',
    '1': 'ANDY'
}
function gamingArray(arr) {
    let counter =0;
    
    // while(arr.length) {
    //     const max = Math.max(...arr);
    //     const indx = arr.indexOf(max);
    //     arr.splice(indx);
    //     counter++;
    // }
    return counter%2===0? participants['1']: participants['0'];
}

const arr = [2,3,5,4,1];
console.log(gamingArray(arr));