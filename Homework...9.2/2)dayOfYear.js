function dayOfYear(date) {
    let newDate = new Date(date)
    let newDate2 = new Date(newDate.getFullYear(), 0, 0)
    return Math.floor((newDate - newDate2) /1000/3600/24)
}

console.log(dayOfYear("1/9/2019"))