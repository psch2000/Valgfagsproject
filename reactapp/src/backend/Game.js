import { StopWatch } from "../assets/StopWatch";
import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { Collider } from "../base/baseStructor/collider/Collider";
import { Composit } from "../base/baseStructor/Composit";
import { Intersect } from "../base/baseStructor/Intersect";
import { callAndSetInterval } from "../base/callAndSetInterval";
import { Time } from "../base/Time";
import { Input } from "../GameEngine/input/Input";
import { KeyValuePair } from "./data-structors/KeyValuePair";

export class Game {
    #composits = [];
    #compositLayers = [];

    #colliders = [];
    
    #compositsToInstantiate = [];
    #compositsToRemove = [];
    #onStart = new EventHandler();

    #context;
    #isRunning;
    #stopWatch = new StopWatch();

    constructor(canvas){
        this.canvas = canvas;
        this.backGroundColor = '#051e28';
    }


    addCollider(collider){
        this.#colliders.push(collider);
    }

    removeCollider(collider){
        var i = this.#colliders.indexOf(collider);
        this.#colliders.splice(i, 1);
    }

    run(){


        if (this.#isRunning == true) return;
        this.#context = this.canvas.context;

        

        callAndSetInterval(() => {
            // this.#stopWatch.start();
            Time.update();
            Input.update();
            this.#removeComposits();
            this.#instantiate();
            this.#start();
            this.#update();
            this.#draw();
            this.#updateCompositsLayerPlacement();

            // this.#stopWatch.stop();

            // console.log("Flow time: ");
            // console.log(this.#stopWatch.getTime());

            this.#checkCollision();
        }, 10)

   
        this.#isRunning = true;        
    }

    #removeComposits() {
        if (this.#compositsToRemove.length === 0) return;

        this.#compositLayers.forEach(layer => {
            layer.forEach((component, componentIndex) => {
                this.#compositsToRemove.forEach(compositToRemove => {
                    if (component === compositToRemove) {console.log("Removed composit: " + compositToRemove.name); layer.splice(componentIndex, 1)};
                })
            })
        })
    }

    #checkCollision(){

        var length = this.#colliders.length;
        var colliders = this.#colliders;

        for (let i = 0; i < length; i++){
            var collider = colliders[i];

            for (let n = 0; n < length; n++){
                if (n == i) continue;
                var otherCollider = colliders[n];

                var pair = collider.overlaps;

                // this.#stopWatch.start();
                var intersects = Intersect.intersects(collider, otherCollider);
                // this.#stopWatch.stop();

                // console.log(this.#stopWatch.getTime());


                if (intersects == true){
                    if (pair.hasKey(otherCollider) == false){
                        pair.addKeyValue(otherCollider, false);
                    }

                    if (pair.getValue(otherCollider) == false){
                        collider.parent.onEnter(otherCollider);
                        pair.setValue(otherCollider, true);
                        continue;
                    }

                    collider.parent.onOverlap(otherCollider);
                    continue;
                }

                if (pair.hasKey(otherCollider) == false) {
                    continue;
                }
                if (pair.getValue(otherCollider) == false) {
                    continue;
                }

                collider.parent.onExit(otherCollider);
                pair.setValue(otherCollider, false);

            }
        }



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
        if (this.#compositLayers[composit.layer] === undefined){
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

    removeComposit = (composit) => {
        this.#compositsToRemove.push(composit);
    }
 
    getComposit(name) {
        let temp = null;

        this.#compositLayers.forEach(layer => {
            layer.forEach(composit => {
                if (composit.name === name) temp = composit;
            })
        })
        
        return temp;
    }


}