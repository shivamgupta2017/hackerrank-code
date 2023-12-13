// function alternateString(str) {
//     let opString = '';
//     for (let indx = 0; indx < str.length ; indx++) {
//         if ((indx+1)%2!==0) {
//             opString+=str.charAt(indx);
//         }
//     }
//     console.log('->', opString);
// }

function alternateString(str) {
    return str.split('').filter((_, indx)=>indx%2===0).join('');
}

console.log(alternateString('TUTORIALRIDE'));