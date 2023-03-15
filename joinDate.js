function combineDate(date, month, year) {
    let combinedDate = ((parseInt(date) * 100 + parseInt(month))*10000+parseInt(year));


}

console.log('combine date -> ', combineDate('02', '09', '1995'))