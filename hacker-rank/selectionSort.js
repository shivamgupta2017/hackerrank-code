const input = [5, 3, 1, 2, 4];

for (let i =0;i<input.length;i++) {

    let theMinimumValueIndx = i;
    for(let j =i+1;j<input.length;j++) {
        if(input[theMinimumValueIndx]>input[j]) {
            theMinimumValueIndx = j;
        }
    }

    let temp = input[i];
    input[i] = input[theMinimumValueIndx];
    input[theMinimumValueIndx] = temp;

}



console.log('input->', input);