import { Component } from "./Component";
import { Transform } from "./Transform";

// MANGLER KOMMENTAR

export class Composit extends Component {

    #components = [];

    constructor(name){
        super();
        this.transform = new Transform();
        this.name = name;
        this.addComponent(this.transform);
        this.components = this.#components; // debugging
    }

    addComponent(component){
        this.#components.push(component);
        component.transform = this.transform;
        component.parent = this;

        try{
            component.components.forEach(c => {
                c.transform = this.transform;
            });
        }
        catch{}
        

        return component;
    }

    removeComponent(component){
        var i = this.#components.indexOf(component);
        this.#components.splice(i);
    }

 


   

    getComponent(type){
        var temp = null;

        this.#components.forEach(c => {
            if (c.type == type){
                temp = c;
            }
        });

        return temp;
    }

    onStart = () => {
        
        this.#components.forEach(c => {
            
        try {  c.onStart();} 
        catch{}   
        }
    );}

    onUpdate(){
        if (this.isActive === false) return;

        this.#components.forEach(c => {
            try {  c.onUpdate();} 
            catch{}   
        });
    }

    onDraw(context){
        if (this.isActive === false) return;
        this.#components.forEach(c => {
            try {c.onDraw(context);} 
            catch{}
        });
    }

}