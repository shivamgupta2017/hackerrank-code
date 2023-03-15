function gridChallenge(gridArr) {
    for (let i =0;i<gridArr.length;i++) {
        const row = gridArr[i].split('').sort();
        gridArr[i] = row;
    }

    let col = 0;
    while (col<gridArr.length) {
       let row = 0;
        while(row<gridArr.length-1) {
            if (gridArr[row][col]>gridArr[row+1][col]) {
                return 'NO';
            }
            row++;
        }
        col++;
    }
    return 'YES';
}