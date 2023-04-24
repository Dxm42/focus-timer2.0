export function Sounds(){
    const coffeeMachine = new Audio("../sounds/Cafeteria.wav")
    const rain = new Audio("../sounds/Chuva.wav")
    const forest = new Audio("../sounds/Floresta.wav")
    const firePlace = new Audio("../sounds/Lareira.wav")

    function pressCoffeeMachine(){
        coffeeMachine.play()
    }

    function pressRain(){
        rain.play()
    }

    function pressForest(){
        forest.play()
    }

    function pressFirePlace(){
        firePlace.play()
    }
    return {
        pressCoffeeMachine,
        pressRain,
        pressForest,
        pressFirePlace
    }
}