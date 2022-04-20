import { Component } from "./Component";
import { Transform } from "./components/Transform";

// MANGLER KOMMENTAR

export class Composit extends Component {

    
    constructor(){
        super();
        this.components = [];
        this.transform = new Transform();
        this.addComponent(this.transform);
    }

    addComponent(component){
        this.components.push(component);
        component.transform = this.transform;
        component.parent = this;
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
            try {  c.update();} catch{}   
        });
    }

    draw(context){
        this.components.forEach(c => {
            try {c.draw(context);} catch{}
        });
    }

}