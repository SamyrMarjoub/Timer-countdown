const days = document.querySelectorAll('.days')
const hour = document.querySelectorAll('.hours')
const min = document.querySelectorAll('.minutes')
const sec = document.querySelectorAll('.seconds')

let countDownDate = new Date("april 22, 2022 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondss = Math.floor((distance % (1000 * 60)) / 1000);
    for (let i = 0; i < sec.length; i++) {
        hour[i].innerHTML = hours
        min[i].innerHTML = minutes
        sec[i].innerHTML = secondss
        let stringday = String(dayss)
        let stringminutes = String(minutes)
        let stringsec = String(secondss)
        let stringhour = String(hours)
        if (stringday.length > 1) {
            days[i].innerHTML = dayss
        } else {
            days[i].innerHTML = "0" + dayss
        }
        if (stringminutes.length > 1) {
            min[i].innerHTML = minutes
        } else {
            min[i].innerHTML = "0" + minutes
        }
        if (stringsec.length > 1) {
            sec[i].innerHTML = secondss
        } else {
            sec[i].innerHTML = "0" + secondss
        }
        if (stringhour.length > 1) {
            hour[i].innerHTML = hours
        } else {
            hour[i].innerHTML = "0" + hours
        }
    }
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);