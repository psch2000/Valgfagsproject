
export class Listener {

    constructor(){
        if (this.constructor === Listener){
            throw new Error("Can't construct an abstract class");
        }
    }

    onNotify(){
        throw new Error("method 'onNotify()' not implemented");
    }
}