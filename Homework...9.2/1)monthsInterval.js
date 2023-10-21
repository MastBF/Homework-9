function monthsInterval(month1, month2) {
    
    let month = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December']
    if(month1.getFullYear() === month2.getFullYear()) {
    return month.slice(month1.getMonth(), month2.getMonth() + 1)
    }
    return [...month.slice(month1.getMonth()), ...month.slice(0, month2.getMonth())]
}


let january = new Date(2017, 9, 1);
let march = new Date(2018, 0, 1);

console.log(monthsInterval(january, march)) //['January', 'February', March']