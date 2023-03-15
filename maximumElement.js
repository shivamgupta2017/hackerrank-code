function getMax(operations) {
    const stack = [];
    const answers = [];
    operations.forEach((nums)=>{
        if(typeof nums === "string" && nums.split(' ')[0]==='1') {
            const n = Number(nums.split(' ')[1]);
            stack.unshift(n);
        }
        else if(nums === '2') {
            stack.shift();
        }
        else if(nums === '3') {
            answers.push(Math.max(...stack));
        }

    });

    return answers;
}
const operations = ['1 97', '2', '1 20', '2', '1 26', '1 20', '2', '3', '1 91', '3']

console.log(getMax(operations).join('\n'));
