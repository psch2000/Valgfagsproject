

export class EventHandler {
    
    #listeners = [];

    
    addListener(listener){
        
        if (this.#listeners.includes(listener) === false){
            this.#listeners.push(listener);
        }
    }

    removeListener(listener){
        this.#listeners = this.#listeners.filter(l => l !== listener);
    }

    clear(){
        this.#listeners = [];
    }

    invoke(){
        this.#listeners.forEach(l => {
            l();
        })
    }
}