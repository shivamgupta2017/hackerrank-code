function matrixMultiplication(A, B) {
    const C = new Array(2).fill().map(()=>new Array(2).fill(0));

    for (let i = 0; i<2; i++) {
        for (let j = 0; j<2; j++) {
            let sum = 0;
            for (let k = 0; k<2; k++) {
                // console.log(i, k, '*', k, i+z);
                console.log(i, k, '*', k, j);
                sum+=(A[i][k]*B[k][j]);
            }
            C[i][j] = sum;
            console.log('***')
        }
    }
    console.log('c->', C);
}

const M1 = [[0, 1], [1, 0]];
const M2 = [[1, 0], [0, 1]];
console.log(matrixMultiplication(M1, M2));
