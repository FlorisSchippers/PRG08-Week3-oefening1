/// <reference path="wheel.ts"/>

class Car {

    public speed: number;
    public div: HTMLElement;
    public x: number;
    public y: number;
    public wheel1: Wheel;
    public wheel2: Wheel;
    public mybehavior: CarBehavior;
    public jumpDirection: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("car");
        parent.appendChild(this.div);

        this.mybehavior = new Driving();

        this.speed = 2;
        this.jumpDirection = -3;
        this.x = 0;
        this.y = 220;

        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.mybehavior.onKeyDown(e, this));
    }

    public draw(): void {
        this.mybehavior.act(this);
        // this.speed -= 0.1;
        // this.x += this.speed;


        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    }


}