import { Component } from "./Component";


export class Transform extends Component{

    constructor(){
        super();
        this.position = {x: 0, y:0 };
        this.size = {width:0, height:0};
        
    }
}