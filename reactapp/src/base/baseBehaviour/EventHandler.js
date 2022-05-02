

export class EventHandler {

    #listeners = [];


    addListener = (listener) =>{
        this.#listeners.push(listener);
    }

    removeListener = (listener) =>{
        const index = this.#listeners.indexOf(listener);
        
        if (index == -1) return;
        this.#listeners.splice(index, 1);
    } 

    clear(){
        this.#listeners = [];
    }

    invoke = (obj) => {
        this.#listeners.forEach((listener) => {
            listener(obj);
        });
    }
}