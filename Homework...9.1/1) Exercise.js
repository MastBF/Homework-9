function ageCalculate(date) {
    let newDate = new Date()
    return Math.floor((newDate - date) / 1000 / 60 / 60 / 24 / 365)
}

let birthdate = new Date(1972,9,21)

console.log(ageCalculate(birthdate))     