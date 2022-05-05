import { EventHandler } from "../base/baseBehaviour/EventHandler";

export class Game {
    #compositLayers = [];
    #compositsToInstantiate = [];
    #compositsToRemove = [];
    #onStart = new EventHandler();

    #context;

    constructor(canvas){
        this.canvas = canvas;
        this.backGroundColor = '#051e28';
    }

    run(){
        this.#context = this.canvas.context;

        setInterval(() => {
            this.#removeComposits();
            this.#instantiate();
            this.#start();
            this.#update();
            this.#draw();
            this.#updateCompositsLayerPlacement();
        }, 10);
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