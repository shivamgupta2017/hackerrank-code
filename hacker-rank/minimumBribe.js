function minimumBribes(q) {
    // Write your code here
    const ob = {};
    for (let iIndx=0;iIndx<q.length-1;iIndx++) {
        for (let jIndx=iIndx+1;jIndx<q.length;jIndx++) {
            if(ob[q[iIndx]]>2)
                return 'Too chaotic';

            if (q[iIndx]>q[jIndx]) {

                if(!ob[q[iIndx]])
                    ob[q[iIndx]]=1;
                else
                    ob[q[iIndx]]+=1;

                let temp = q[iIndx];
                q[iIndx] = q[jIndx];
                q[jIndx] = temp;
            }
        }

    }
    return Object.values(ob).reduce((prev, curr)=>(prev+curr), 0);

}

console.log(minimumBribes([2, 1, 5, 3, 4]));
// i =0 j =1 [1 4 2 3]
// i =0 j =2 [1 4 2 3]
// i =0 j =3 [1 4 2 3]
// i =1 j =2 [1 2 4 3]
// i =1 j =3 [1 2 4 3]
// i =2 j =3 [1 2 3 4]
