

export class ReuseablePool {
    
    #reuseables;

    constructor(){
        if (this.constructor === ReuseablePool){
            throw new Error("Can't construct an abstract class");
        }

        this.#reuseables = [];
    }

    acquireReuseable(){

        console.log(this.#reuseables.length);
        if (this.#reuseables.length != 0){
            var reuseable = this.#reuseables.pop();
            reuseable.isActive = true;
            return reuseable;
        }

        return this.makeReuseable();
    }

    releaseReuseable(reuseable){
        if (reuseable === null) return;
        reuseable.isActive = false;
        this.#reuseables.push(reuseable);
    }

    makeReuseable(){
        throw new Error("method 'makeReusable()' is not implemented.")
    }
}