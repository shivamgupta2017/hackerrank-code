function matrixSetRowColZero(matrix) {
    let row = 0;

    while (row < matrix.length) {
        let col = 0;
        while (col < matrix.length) {
            if (matrix[row][col] === 0) {

                let tempRow = 0, tempCol = col;

                while (tempRow < matrix.length) {
                    matrix[tempRow][tempCol] = 0;
                    tempRow++;
                }

                tempRow = row, tempCol = 0;

                while (tempCol < matrix.length) {
                    matrix[tempRow][tempCol] = 0;
                    tempCol++;
                }

                col = tempCol;


            }
            col++;
        }
        row++;
    }
    console.log('matrix>', matrix);
    return matrix;
}

console.log('New Matrix ->', matrixSetRowColZero([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
]));
