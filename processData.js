function processData(input) {
    const inp = input.split('\n').map((e)=>(e.trim()));
    inp.shift();
    const output = [];
    for(let i =0;i<inp.length;i++) {
        const [type, n] = inp[i].split(' ');

        switch (type) {
            case '1':
                output.push(n);
                break;
            case '2':
                output.shift();
                break;
            case '3':
                console.log(output.slice(0, 1)[0]);
                break;
            default:
                console.log('no option');
        }
    }
}



processData('10 \n 1 42 \n 2 \n 1 14 \n 3 \n 1 28 \n 3 \n 1 60 \n 1 78 \n 2 \n 2');

/**
 * STDIN   Function
 -----   --------
 10      q = 10 (number of queries)
 1 42    1st query, enqueue 42
 2       dequeue front element
 1 14    enqueue 42
 3       print the front element
 1 28    enqueue 28
 3       print the front element
 1 60    enqueue 60
 1 78    enqueue 78
 2       dequeue front element
 2       dequeue front element
 */
