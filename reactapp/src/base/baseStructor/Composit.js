import { Collider } from "./collider/Collider";
import { Component } from "./Component";
import { Transform } from "./Transform";

export class Composit extends Component {
    
    #components = [];

    constructor(name){
        super();
        this.layer = 0;
        this.name = name;
        this.collider = null;
        this.#addTransform();

        // Debugging only.
        this.components = this.#components;
    }


   

    #addTransform(){
        this.transform = new Transform();
        this.addComponent(this.transform);
    }


    addComponent(component, index){
        component.transform = this.transform;
        component.parent = this;
   
        try{
            component.components.forEach(c => {
                c.transform = this.transform;
            });
        }
        catch{}
        

        if (index == undefined){
            this.#components.push(component);
        }
        else{
            this.#components.splice(index, 0, component);
        }

        return component;
    }

    removeComponent(component){
        var i = this.#components.indexOf(component);
        this.#components.splice(i);
    }

    getComponent(type){
        var temp = null;


        this.#components.forEach(c => {
            if (c.constructor.name == type.name){
                temp = c;
            }

            if (c.constructor.prototype  instanceof type){
                temp = c;
            }
        });

        return temp;
    }

    onEnter(other){
        this.#components.forEach(c => {            
            try { c.onEnter(other); } 
            catch (ex) { console.log("An error happened in onEnter: " + ex); }
        });
    }

    onOverlap(other){
        this.#components.forEach(c => {            
            try { c.onOverlap(other); } 
            catch (ex) { console.log("An error happened on onOverlap: " + ex); }
        });
    }

    onExit(other){
        this.#components.forEach(c => {            
            try { c.onExit(other); } 
            catch (ex) { console.log("An error happened in onExit: " + ex); }
        });
    }

    onStart() {  
        this.#components.forEach(c => {            
            try { c.onStart(); } 
            catch (ex) { console.log("An error happened in onStart: " + ex); }
        });
    }

    onUpdate(){
        if (this.isActive === false) return;
        this.#components.forEach(c => {
            if (c.isActive == true){
                try { c.onUpdate(); } 
                catch (ex) { console.log("An error happened in onUpdate: " + ex); }
            }
        });
    }

    onDraw(context){
        if (this.isActive === false) return;
        this.#components.forEach(c => {
            if (c.isActive == true){
                try {c.onDraw(context);} 
                catch (ex) { console.log("An error happened in onDraw: " + ex); }
            }       
        });
    }

}