 export function Controls({
    minutesDisplay
 }){

    function addMinutes(){
        let newMinutes = Number(minutesDisplay.textContent)

        minutesDisplay.textContent = String(newMinutes += 1).padStart(2, "00")
    }


    function decreaseMinutes(){
        let newMinutes = Number(minutesDisplay.textContent)
        minutesDisplay.textContent = String(newMinutes -= 1).padStart(2, "00")
        
        if(minutesDisplay.textContent <= 0){
        minutesDisplay.textContent = "00"
        return    
        }
    }
    

    return { 
        addMinutes,
        decreaseMinutes        
    }
}

