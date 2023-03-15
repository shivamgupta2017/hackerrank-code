function maximumWealth(accounts) {
    const wealths = [];
    for (let row =0;row<accounts.length;row++) {
        let sum = 0;
        for (let col=0;col<accounts[row].length;col++) {
            sum+=accounts[row][col];
        }
        wealths.push(sum);
    }
    return Math.max(...wealths);

};

console.log(maximumWealth([[1,2,3],[3,2,1]]));