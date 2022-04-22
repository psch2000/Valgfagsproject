import { Canvas } from "./Canvas";
import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { InputHandler } from "./input/InputHandler";


export class CanvasGame {

    #thread;
    #composits = [];
    #compositsToInstantiate = [];
    #onStart = new EventHandler();

    constructor(x, y, size){
        this.window = new Canvas(x, y, size);

    }

    run(){
        this.#thread = setInterval(() => this.#invoke(), 0);
    } 

    #invoke(){
        InputHandler.onUpdate();
        this.#onInstantiate();
        this.#startComposits();
        this.#updateComposits();
        this.#drawComposits();
    }


    #onInstantiate(){
        this.#compositsToInstantiate.forEach(comp => {

            this.#onStart.addListener(comp.onStart);
            this.#composits.push(comp);
        });

        this.#compositsToInstantiate = [];
    }

    #startComposits(){
        this.#onStart.invoke();
        this.#onStart.clear();
    }

    #updateComposits(){

        this.#composits.forEach(comp => {
            comp.onUpdate();
        });
    }

    #drawComposits(){
        this.window.clear();
        this.#composits.forEach(comp => {
            comp.onDraw(this.window.getContext());
        });
    }


   

    instantiate(gameObject, position){
        if (position !== undefined){
            gameObject.transform.position = position;
        }
        this.#compositsToInstantiate.push(gameObject);
    }
    
}















