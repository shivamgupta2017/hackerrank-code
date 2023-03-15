const PLAYERS = {
    Louise: 0,
    Richard: 1
};
let REVERSE_PLAYERS = {};
for (let k in PLAYERS) {
    REVERSE_PLAYERS = {...REVERSE_PLAYERS, [PLAYERS[k]]: k}
}

function dividendCount(n) {
    let power = 0;

    while (n > 1) {
        n = Math.floor(n / 2);
        power++;
    }
    return power;

}

function counterGame(n) {
    let currentPlayer = null;

    while (n > 1) {

        if (currentPlayer === null || currentPlayer === PLAYERS.Richard) {
            currentPlayer = PLAYERS.Louise;
        } else {
            currentPlayer = PLAYERS.Richard;
        }

        const power = dividendCount(n);

        if (Math.pow(2, power) === n) {
            n = n / 2;
            // console.log(currentPlayer + ' has divided by 2');

        } else {
            n = n - (Math.pow(2, power));
            // console.log(currentPlayer + ' has substracted by ' + power)
        }
    }

    return REVERSE_PLAYERS[currentPlayer];

}

[1560834904,
    1768820483,
    1533726144,
    1620434450,
    1463674015].forEach((n) => {
    console.log('powerOfTwo(6) ', counterGame(n));
});
