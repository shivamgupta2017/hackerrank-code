function towerBreakers(n, m) {
    // find how to break one tower then multiply by number of towers...
    let counter = 0;
    if (m % 2 !== 0) {
        counter++;
    } else {
        while (m > 1) {
            for (let divider = Math.floor(m / 2); divider >= 1; divider--) {
                if (m % divider === 0) {
                    m = divider;
                    counter++;
                }
            }
        }
    }

    if (((counter * n) % 2) === 0) {
        return '2';
    } else {
        return '1';
    }

}

console.log(towerBreakers(1, 4));