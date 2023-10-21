function formatDate(date) {
    let months = ['January', ' February', ' March',
        'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

let date = new Date(2023, 9, 3)
console.log(formatDate(date))