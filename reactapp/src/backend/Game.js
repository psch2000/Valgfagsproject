import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { Collider } from "../base/baseStructor/collider/Collider";
import { Composit } from "../base/baseStructor/Composit";
import { Intersect } from "../base/baseStructor/Intersect";
import { callAndSetInterval } from "../base/callAndSetInterval";
import { KeyValuePair } from "./data-structors/KeyValuePair";

export class Game {
    #composits = [];
    #compositLayers = [];
    
    #compositsToInstantiate = [];
    #onStart = new EventHandler();

    #context;
    #isRunning;

    constructor(canvas){
        this.canvas = canvas;
        this.backGroundColor = '#051e28';
    }

    run(){

      ;
     

        if (this.#isRunning == true) return;
        this.#context = this.canvas.context;

        

        callAndSetInterval(() => {
            this.#instantiate();
            this.#start();
            this.#update();
            this.#draw();
            this.#updateCompositsLayerPlacement();
            this.#checkCollision();
        }, 10)

   
        this.#isRunning = true;
    }

    #checkCollision(){

        var collider = null;
        var otherCollider = null;
        this.#composits.forEach(c => {

            collider = c.getComponent(Collider);
            
            if (collider != null){

                this.#composits.forEach(other => {

                    if (c != other){
                        otherCollider = other.getComponent(Collider);


                        if (otherCollider != null){

                            var pair = collider.overlaps;

                            if (Intersect.intersects(collider, otherCollider)){
                                
                                
                                if (pair.hasKey(other) == false){
                                    pair.addKeyValue(other, false);
                                }
                           
                                if (pair.getValue(other) == false){
                                    c.onEnter(other);
                                    pair.setValue(other, true);
                                }
                                else{
                                    c.onOverlap(other);
                                }

                            }
                            else{

                                if (pair.hasKey(other) == true){
                                    if (pair.getValue(other) == true){
                                        c.onExit(other);
                                        pair.setValue(other, false);
                                    }
                                }
                           
                                
                            }
                        }
                    }
                    
                })
            }

        })

    }

    


    #instantiate(){
        this.#compositsToInstantiate.forEach(root => {

            this.#onStart.addListener(() => root.onStart());
            this.#addCompositToLayers(root);
        })

        this.#compositsToInstantiate = [];
    }

    #start(){
        this.#onStart.invoke();
        this.#onStart.clear();
    }

    #update(){
        this.#compositLayers.forEach(layer => {
            layer.forEach(root => {
                root.onUpdate();
            })
        })
  
    }

    
    #draw(){
        this.#clearCanvas(this.canvas, this.#context);
        this.#compositLayers.forEach(layer => {
            layer.forEach(root => {
                root.onDraw(this.#context);
            });
        });
    }

    #clearCanvas(canvas, ctx){
        var {width, height} = canvas.rect;
        ctx.fillStyle = this.backGroundColor;
        ctx.fillRect(0,0, width, height);
    }

    #updateCompositsLayerPlacement(){
        this.#compositLayers.forEach((layer, layerIndex) => {
            layer.forEach((root, rootIndex) => {
                if (root.layer != layerIndex){
                    this.#compositLayers[layerIndex].splice(rootIndex,1);
                    this.#addCompositToLayers(root);
                }
            })
        })
    }

    #addCompositToLayers(composit){
        if (this.#compositLayers[composit.layer] == null){
            this.#compositLayers[composit.layer] = [];
        }

        
        this.#compositLayers[composit.layer].push(composit);

    }

    find(name){

        var temp = null;

        this.#compositLayers.forEach(layer => {
            layer.forEach(root => {
                if (root.name == name){
                    temp = root;
                }
            })
        })

        return temp;
    }

    addComposit(composit){
        this.#compositsToInstantiate.push(composit);
        this.#composits.push(composit); 
    }

 



}