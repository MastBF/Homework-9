function rangeOfYear(date1,date2) {
    return Math.floor((date2 - date1) / 1000/3600/24)
}

let date1 = new Date(2000,0,1)
let date2 = new Date(2010,0,1)

console.log(rangeOfYear(date1,date2))