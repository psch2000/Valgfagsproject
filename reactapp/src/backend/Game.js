import { StopWatch } from "../assets/StopWatch";
import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { Collider, COLLIDERS } from "../base/baseStructor/collider/Collider";
import { Vector2d } from "../base/baseStructor/Vector2d";
import { callAndSetInterval } from "../base/callAndSetInterval";
import { Time } from "../base/Time";
import { Input } from "../GameEngine/input/Input";
import { QuadTreeNode } from "../quadtree/QuadTreeNode";


export class Game {
    #composits = [];
    #compositLayers = [];


    #gridRectangles = [];

    
    #compositsToInstantiate = [];
    #compositsToRemove = [];
    #onStart = new EventHandler();

    #context;
    #isRunning;
    #frame = 0;
    #stopWatch = new StopWatch();

    constructor(canvas){
        this.canvas = canvas;
        this.backGroundColor = '#051e28';
        
    }

    addCollider(collider){
        // this.#colliders.push(collider);
        // this.#rootNode.addCollider(collider);
    }

    removeCollider(collider){
        // var i = this.#colliders.indexOf(collider);
        // this.#colliders.splice(i, 1);
    }

    run(){
        if (this.#isRunning == true) return;
        this.#context = this.canvas.context;
   
        callAndSetInterval(() => {
            Time.update();
            Input.update();
            this.#removeComposits();    
            this.#instantiate();
            this.#start();
            this.#update();
            this.#draw();
            this.#updateCompositsLayerPlacement();

            this.#frame++;

            this.#quadTreeCollision();

      
        }, 10)

   
        this.#isRunning = true;        
    }

    #removeComposits() {
        if (this.#compositsToRemove.length === 0) return;

        this.#compositLayers.forEach(layer => {
            layer.forEach((composit, compositIndex) => {
                this.#compositsToRemove.forEach(compositToRemove => {
                    if (composit === compositToRemove) {
                        composit.onDestroy();
                        console.log("Removed composit: " + compositToRemove.name); 
                        layer.splice(compositIndex, 1)
                    };
                })
            })
        })
    }

 

    #quadTreeCollision(){

        var rootNode = new QuadTreeNode(Vector2d.zero, window.innerWidth, window.innerHeight);
        rootNode.aabbs = COLLIDERS;
        rootNode.handleNode(0);
                    
        rootNode.leafNodes.forEach(leaf => {

            var length = leaf.aabbs.length;
            for (let i = 0; i < length; i++){
                var c = leaf.aabbs[i];
                if (c.isActive === false) continue;

                for (let j = 0; j < length; j++){
                    if (i === j) continue;

                    var other = leaf.aabbs[j];
                    if (other.isActive === false) continue;
                    if (c.doesOverlap(other) === false) continue;

                    c.onIntersect(other);
                    c.parent.onOverlap(other.parent);
                }
            }

        });
        // rootNode.draw(this.#context)
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
    }

    removeComposit = (composit) => {
        composit.isActive = false;
        composit.transform.position = new Vector2d(-100, -100);
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