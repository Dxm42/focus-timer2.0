export function Timer({
    secondsDisplay,
    minutesDisplay,
    timerTimeOut
}){

    function countdown(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        timerTimeOut = setTimeout(function (){
        
        if(seconds <= 0 ){
            seconds = 60
    
            minutesDisplay.textContent = String(minutes -1).padStart(2, "00")
        }
        secondsDisplay.textContent = String(seconds -1).padStart(2, "00")
        
        if(minutes <= 0){   
            return
        }
    
        countdown()
        }, 1000)  
        
    }

    function stopDisplay(){
        minutesDisplay.textContent = "25"
        secondsDisplay.textContent = "00"
        
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        stopDisplay
    }

}
  

  