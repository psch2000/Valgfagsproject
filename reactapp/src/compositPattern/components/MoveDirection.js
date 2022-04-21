import { Component } from "../Component";


export class MoveDirection extends Component {

    constructor(direction, speed){
        super();

        this.direction = direction;
        this.speed = speed;
    }

    update(){

        this.transform.position.x += this.direction.x * this.speed;
        this.transform.position.y += this.direction.y * this.speed;
    }

}