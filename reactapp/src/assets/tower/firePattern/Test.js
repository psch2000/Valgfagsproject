import { Vector2d } from "../../../base/baseStructor/Vector2d";
import { Time } from "../../../base/Time";



export class Test{

    #time = 0;

    constructor(offsets, fireDirection, fireInterval){
        this.offsets = offsets;
        this.fireDirection = fireDirection;
        this.fireInterval = fireInterval;
        this.parent = null;
    }

    getProduct(){
        return this;
    }

    fireRoutine(){
        this.#time += Time.deltaTime;


        if (this.#time >= this.fireInterval){
            this.#fire();
        }
    }




}