import { instantiate } from "../assets/app/functions/instantiate";
import { SquareRenderer } from "../assets/components/SquareRenderer";
import { StopWatch } from "../assets/StopWatch";
import { EventHandler } from "../base/baseBehaviour/EventHandler";
import { Collider, COLLIDERS } from "../base/baseStructor/collider/Collider";
import { RectangleCollider } from "../base/baseStructor/collider/RectangleCollider";
import { Composit } from "../base/baseStructor/Composit";
import { Intersect } from "../base/baseStructor/Intersect";
import { Vector2d } from "../base/baseStructor/Vector2d";
import { callAndSetInterval } from "../base/callAndSetInterval";
import { Time } from "../base/Time";
import { Input } from "../GameEngine/input/Input";
import { BroadPhase } from "../kd-tree/BroadPhase";
import { Node } from "../kd-tree/Node";
import { QuadTreeNode } from "../quadtree/QuadTreeNode";
import { KeyValuePair } from "./data-structors/KeyValuePair";


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

 

    
    setGridColliders(size){

        // var width = this.canvas.rect.width / size;
        // var height = this.canvas.rect.height / size;


        // for (let row = 0; row < size; row++){

        //     for (let col = 0; col < size; col++){

        //         var rect = new RectangleCollider(width, height, true);
        //         rect.transform.position = new Vector2d(col * width, row * height);

        //         this.#gridRectangles.push({collider: rect, overlaps: []});
        //     }
        // }


    }

    #checkGridRectangleCollision(){
        

        // this.#stopWatch.start();
        // for (let i = 0; i < this.#gridRectangles.length; i++){

        //     var obj = this.#gridRectangles[i];


        //     for (let j = 0; j < this.#colliders.length; j++){

        //         var collider = this.#colliders[j];

        //         if (collider.parent == null) continue;


        //         if (obj.collider.doesOverlap(collider) == true){

        //             if (obj.overlaps.includes(collider) == false){
        //                 obj.overlaps.push(collider);
        //             }
        //             continue;
        //         }

        //         if (obj.overlaps.includes(collider) == true){
        //             var index = obj.overlaps.indexOf(collider);
        //             obj.overlaps.splice(index, 1);
        //         }

        //     }
        // }

        // this.#stopWatch.stop();
        // var time = this.#stopWatch.getTime();
        // console.log("First")

        // console.log(time);
        

    }

    #checkCollision(){

        // this.#stopWatch.start();

        // this.#rootNode.nodes = [];
        // this.#broadPhase.reset();
        // this.#broadPhase.handleNode(this.#rootNode);
        
        // this.#broadPhase.endNodes.forEach(endNode => {

        //     var colliders = endNode.colliders;

        //     for (let i = 0; i < colliders.length; i++){

        //         var collider = colliders[i];
                
        //         for (let j = 0; j < colliders.length; j++){
        //             if (i == j) continue;
        //             var other = colliders[j];
                    
        //             var pair = collider.overlaps;

        //             if (collider.doesOverlap(other)){
        //                 if (pair.hasKey(other) == false){
        //                     pair.addKeyValue(other, false);
        //                 }

        //                 if (pair.getValue(other) == false){
        //                     collider.parent.onEnter(other.parent);
        //                     pair.setValue(other, true);
        //                     continue;
        //                 }

        //                 collider.parent.onOverlap(other.parent);
        //                 continue;
        //             }

        //             if (pair.hasKey(other) == false) continue;
        //             if (pair.getValue(other) == false) continue;
        //             collider.parent.onExit(other.parent);
        //             pair.setValue(other, false);
                    
        //         }

        //     }

        // })

        // for (let i = 0; i < this.#gridRectangles.length; i++){
        //     var obj = this.#gridRectangles[i];
        //     var colliders = obj.overlaps;

        //     var length = colliders.length;
        //     // console.log(obj)

        //     for (let j = 0; j < length; j++){
        //         var collider = colliders[j];

        //         for (let k = 0; k < length; k++){
        //             if (j == k) continue;
        //             var other = colliders[k];
        //             var pair = collider.overlaps;

        //             if (collider.doesOverlap(other)){
        //                 if (pair.hasKey(other) == false){
        //                     pair.addKeyValue(other, false);
        //                 }

        //                 if (pair.getValue(other) == false){
        //                     collider.parent.onEnter(other.parent);
        //                     pair.setValue(other, true);
        //                     continue;
        //                 }

        //                 collider.parent.onOverlap(other.parent);
        //                 continue;
        //             }

        //             if (pair.hasKey(other) == false) continue;
        //             if (pair.getValue(other) == false) continue;
        //             collider.parent.onExit(other.parent);
        //             pair.setValue(other, false);
        //         }
        //     }
            
        // }


        this.#stopWatch.stop();
        var time = this.#stopWatch.getTime();
        // console.log("second")
        // console.log(time);
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