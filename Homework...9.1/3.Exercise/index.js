function timer(date1, date2) {
    let differance = date2 - date1
    let days = Math.floor(differance / 1000 / 3600 / 24)
    let hours = Math.floor((differance -
        (days * 1000 * 3600 * 24)) / 1000 / 3600)
    let minutes = Math.floor((differance - (days * 1000 * 3600 * 24) -
        (hours * 1000 * 3600)) / 1000 / 60)
    let seconds = Math.floor((differance - (days * 1000 * 3600 * 24) -
        (hours * 1000 * 3600) - (minutes * 1000 * 60)) / 1000)

        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
}
let date1 = new Date()
let date2 = new Date(2024, 0, 2)

timer(date1, date2)