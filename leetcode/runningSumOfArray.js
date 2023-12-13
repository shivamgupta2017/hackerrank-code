// const nos = [3, 1, 2, 5];
// const sum = nos.reduce((prv, curr)=>prv+curr, 0)
// console.log('sum -', sum);


let maxSum = 0;
const customerWealth = [[7, 1, 3], [2, 8, 7], [1, 9, 5]];
for (let row = 0; row < customerWealth.length; row++) {
  const column = customerWealth[row];
  const sum = column.reduce((prev, curr) => prev + curr, 0);
  if (sum>maxSum) {
    maxSum = sum;
  }
}
console.log('max sum -', maxSum);
