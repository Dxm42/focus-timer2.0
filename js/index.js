import { Timer } from "./timer.js"
import { Controls } from "./controls.js"

let buttonPlay = document.querySelector('.btn-play')
let buttonStop = document.querySelector('.btn-stop')
let buttonAdd = document.querySelector('.btn-add')
let buttonDecrease = document.querySelector('.btn-decrease')

let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')
let timerTimeOut

let buttonRain = document.querySelector('.btn-rain')
let buttonHouse = document.querySelector('.btn-house')
let buttonFire = document.querySelector('.btn-fire')

const controls = Controls({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut
})

const timer = Timer({
    secondsDisplay,
    minutesDisplay,
    timerTimeOut
})
buttonAdd.addEventListener('click', () => {
 controls.addMinutes()

})
buttonDecrease.addEventListener('click', () => {
 controls.decreaseMinutes()

})

buttonPlay.addEventListener('click', () => {
  timer.countdown()
})

buttonStop.addEventListener('click', () => {  

  timer.stopDisplay()
})