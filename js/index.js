import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { buttonPlay, buttonAdd, buttonStop, buttonDecrease, buttonRain, buttonFire, buttonHouse, btnTree} from "./elements.js"
import { Sounds } from "./sounds.js"

let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')
let timerTimeOut

const controls = Controls({
    minutesDisplay
})

const timer = Timer({
    secondsDisplay,
    minutesDisplay,
    timerTimeOut
})

const sounds = Sounds()

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

buttonRain.addEventListener('click',() => {
 sounds.pressRain()  
})

buttonHouse.addEventListener('click',() => {
  sounds.pressCoffeeMachine()
})
buttonFire.addEventListener('click',() => {
  sounds.pressFirePlace()
})
btnTree.addEventListener('click',() => {
  sounds.pressForest()
})