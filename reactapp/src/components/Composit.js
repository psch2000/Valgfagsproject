import { Component } from "react";

// MANGLER KOMMENTAR

export class Composit extends Component {

    constructor(){
        super();
        this.components = [];
    }

    addComponent(component){
        this.components.push(component);
        return component;
    }

    getComponent(type){
        var temp = null;

        this.components.forEach(c => {
            if (c.type == type){
                temp = c;
            }
        });

        return temp;
    }

    update(){
        this.components.forEach(c => {
            c.update();
        });
    }

    draw(){
        this.components.forEach(c => {
            c.draw();
        });
    }

}