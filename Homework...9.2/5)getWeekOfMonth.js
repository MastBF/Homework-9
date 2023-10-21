const getWeekOfMonth = (date) => {
    if(date.getDate() <= 7) return 1
    if(date.getDate() <= 14) return 2
    return 3
};
const result = getWeekOfMonth(new Date(2017, 10, 1));

console.log(result)