



export class State {


    constructor(){
        if (this.constructor == State) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.context = null;
    }

    execute() {
        throw new Error("Method 'execute()' must be implemented.");
    }
    

}