import { Canvas } from "./Canvas";
import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { InputHandler } from "./input/InputHandler";
import { ThreadStart } from "../base/ThreadStart";


export class CanvasGame {

    #thread;
    #composits = [];
    #compositsToInstantiate = [];
    #onStart = new EventHandler();

    constructor(x, y, width, height){
        this.window = new Canvas(x, y, width, height);

    }

    run(){
        this.#thread = ThreadStart(() => this.#invoke(), 0);
        
    }



    #invoke(){
        InputHandler.onUpdate();
        this.#onInstantiate();
        this.#startComposits();
        this.#updateComposits();
        this.#drawComposits();
    }


    #onInstantiate(){
        this.#compositsToInstantiate.forEach(root => {
            this.#onStart.addListener(root.onStart);
            this.#composits.push(root);
        });

        this.#compositsToInstantiate = [];
    }

    #startComposits(){
        this.#onStart.invoke();
        this.#onStart.clear();
    }

    #updateComposits(){

        this.#composits.forEach(root => {
            root.onUpdate();
        });
    }

    #drawComposits(){
        this.window.clear();
        this.#composits.forEach(root => {
            root.onDraw(this.window.getContext());
        });
    }


    findObjectWithName(name){
        var temp = null;

        this.#onInstantiate();
       
        this.#composits.forEach(root => {

            if (root.name == name){
                temp = root;
            }
        })
        return temp;
    }

    instantiate(gameObject, position){
        this.#compositsToInstantiate.push(gameObject);
        
        if (position !== undefined){
            gameObject.transform.position = position;
        }
    }
    
}















