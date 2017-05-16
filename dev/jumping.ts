class Jumping implements CarBehavior {

    constructor() {

    }

    public act(car: Car): void {
        car.x += car.speed;
        car.y += car.jumpDirection;
        if (car.y < 140) car.jumpDirection = 3;
        if (car.y > 217) car.mybehavior = new Crashing();
    }

    public onKeyDown(e: KeyboardEvent, car: Car): void {
        console.log(e.key);
    }
}