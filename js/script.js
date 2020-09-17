let days = document.getElementById('days')
let hours = document.getElementById('hours')
let mins = document.getElementById('mins')
let seconds = document.getElementById('seconds')

let newYear = new Date('1 jan 2021')
let today = new Date()
let remainingDays = Math.floor((newYear - today) / (24 * 3600 * 1000))

function calcDays() {

    let newYear = new Date('1 jan 2021')
    let today = new Date()
    let remainingSecs = Math.floor((newYear - today) / (1000))
    let remainingDays = Math.floor((remainingSecs) / (24 * 3600))
    console.log(remainingDays)
    let remHrs = Math.floor((remainingSecs / 3600) % 24)
    console.log(remHrs)
    let remMins = Math.floor(remainingSecs / 60 % 60)
    let remSecs = Math.floor(remainingSecs % 60)
    console.log(remMins)
    days.innerHTML = showZero(remainingDays)
    hours.innerHTML = showZero(remHrs)
    mins.innerHTML = showZero(remMins)
    seconds.innerHTML = showZero(remSecs)
}

function showZero(time) {
    return time < 10 ? `0${time}` : time
}


calcDays()

setInterval(calcDays, 1000)