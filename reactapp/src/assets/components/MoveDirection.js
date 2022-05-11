import { Move } from "./Move";


export class MoveDirection extends Move{


    constructor(direction, speed){
        super(direction, speed);
    }


    onUpdate(){
        this.transform.position.x += this.direction.x * this.speed;
        this.transform.position.y += this.direction.y * this.speed;
    }
}