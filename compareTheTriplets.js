function compareTriplets(a, b) {
    // Write your code here
    const points = [0, 0];
    for(let i = 0;i<a.length;i++) {
        if(a[i]>b[i]) {
            points[0] = points[0]+1;
        } else if(a[i]<b[i]) {
            points[1] = points[1]+1;
        }
    }
    return points;

}

console.log('compare -', compareTriplets([6, 8, 12], [7, 9, 15]));