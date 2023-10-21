function getDay(date) {
    let newDate = new Date(date)
    let weekDays = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekDays[newDate.getDay()]
}

console.log(getDay("09/04/2016"))