class Crashing implements CarBehavior {

    constructor() {

    }

    public act(car: Car): void {
        car.wheel1.speed = -2;
        car.wheel2.speed = 2;
        car.div.classList.add("crashed");

        // gameOver functie van game aanroepen via singleton
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    }

    public onKeyDown(e: KeyboardEvent, car: Car): void {
        console.log(e.key);
    }
}