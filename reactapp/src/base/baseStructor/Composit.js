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
            try {  c.onEnter(other);} 
            catch{}   
        });
    }

    onOverlap(other){
        this.#components.forEach(c => {            
            try {  c.onOverlap(other);} 
            catch{}   
        });
    }

    onExit(other){
        this.#components.forEach(c => {            
            try {  c.onExit(other);} 
            catch{}   
        });
    }

    onStart() {  
        this.#components.forEach(c => {            
            try {  c.onStart();} 
            catch{}   
        });
    }

    onUpdate(){
        if (this.isActive === false) return;
        this.#components.forEach(c => {
            if (c.isActive == true){
                try {  c.onUpdate();} 
                catch{} 
            }
        });
    }

    onDraw(context){
        if (this.isActive === false) return;
        this.#components.forEach(c => {
            if (c.isActive == true){
                try {c.onDraw(context);} 
                catch{}
            }       
        });
    }

}