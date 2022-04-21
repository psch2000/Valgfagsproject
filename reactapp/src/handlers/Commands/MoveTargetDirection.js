import { Command } from "../Command";


export class MoveTargetDirection extends Command{

    constructor(transform, direction, speed){
        super();
        this.direction = direction;
        // console.log("here");
        this.speed = speed;
        this.transform = transform;
    }


    execute(){
        var prevPos = this.transform.position;
        console.log(prevPos);
    }

}