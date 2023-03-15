function arrayReverse(arr, output) {

    if(!arr.length) {
        return output;
    } else {
        output.push(arr.pop());
        return arrayReverse(arr, output);
    }
}

console.log(arrayReverse([1, 2, 5, 10], []));