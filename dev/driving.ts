class Driving implements CarBehavior {

    constructor() {

    }

    public act(car: Car): void {
        car.x += car.speed;
    }

    public onKeyDown(e: KeyboardEvent, car: Car): void {
        console.log(e.key);

        if (e.key == ' ') {
            car.mybehavior = new Jumping();
        } else if (e.key == 'Control') {
            car.mybehavior = new Crashing();
        }
    }
}