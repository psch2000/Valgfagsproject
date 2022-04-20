import { Command } from "../Command";


export class MoveDirection extends Command{

    constructor(compositTarget, direction, speed){
        super();
        this.direction = direction;
        this.speed = speed;
        this.compositTarget = compositTarget;
    }


    execute(){
        var prevPos = this.compositTarget.transform.position;
        console.log(prevPos);
    }

}