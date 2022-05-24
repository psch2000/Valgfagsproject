import { Vector2d } from "../baseStructor/Vector2d";



// Makes it possible to reuse defined reusables.
export class ReuseablePool {
    
    _reuseables;

    constructor(){
        if (this.constructor === ReuseablePool){
            throw new Error("Can't construct an abstract class");
        }

        this._reuseables = [];
    }

    acquireReuseable(){

        if (this._reuseables.length != 0){
            var reuseable = this._reuseables.pop();
            reuseable.isActive = true;
            return reuseable;
        }

        return this.makeReuseable();
    }

    releaseReuseable = (reuseable) => {
        if (reuseable === null || reuseable === undefined) return;
        if (this._reuseables.includes(reuseable)) return;

        reuseable.isActive = false;
        reuseable.transform.position = new Vector2d(-100, -100);
        this._reuseables.push(reuseable);
    }

    makeReuseable(){
        throw new Error("method 'makeReusable()' is not implemented.")
    }
}