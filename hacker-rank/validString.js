function isValid(s) {
    const ob = {};
    for (let i =0;i<s.length;i++) {
        if(!(ob[s.charAt(i)]))
            ob[s.charAt(i)] = 1;
        else
            ob[s.charAt(i)]+=1;
    }


    console.log('obValues ->', ob);
    const val = Object.values(ob);
    const ob2 = {};

    for (let i = 0; i < val.length; i++) {
        if(!ob2['count->'+val[i]])
            ob2['count->'+val[i]] = 1;
        else
            ob2['count->'+val[i]]+=1;
    }
    console.log('ob2->',ob2)
    const keys = Object.keys((ob2));
    console.log('keys->', keys);
    if(keys.length===1) {
        return 'YES';
    } else {
    //    find lesser.
        let p = keys[0];
        for (const pElement of keys) {
            if((!ob2[pElement]) || (ob2[pElement]<ob2[p]))
                p = pElement;
        }
        console.log('p->', p);
        ob2[p]-=1;
        if(ob2[p]===0) {
            ob2[p] = undefined;
        }
        if((Object.keys(ob2).length)>1) {
            return "NO";
        } else {
            return "YES";
        }


    }
}

// const s = 'aabbccc'
console.log(isValid('abcdefghhgfedecba'));