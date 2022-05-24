


 // Makes it possible to read the uses keyboard and mouse inputs
export class Input {

    static #currentKeyStates = {};
    static #isKeyPressed = {};
    static #isKeyReleased = {};
    static #previousPressedKey = {};

    static #isDown = {}
    static #isUp = {}

    // Adds the given evets
    static addEvents = () => {
        window.addEventListener('keydown', (event) => this.#onKeyDown(event), true);
        window.addEventListener('keyup', (event) => this.#onKeyUp(event), true);
        window.addEventListener('mousedown', (event) => this.#onMouseDown(event));
        window.addEventListener('mouseup', (event) => this.#onMouseUp(event));
    }


    

    static #onMouseDown(event){
        var button = event.button;
        this.#onDown(button);
    }

    static #onDown(key){

        // Define that the key is active
        this.#currentKeyStates[key] = true;

        // Define that the keys released state is not released.
        this.#isKeyReleased[key] = false;

        // Set the previous pressed key to the current pressed key
        this.#previousPressedKey = key;
    }

    static #onKeyDown(event){
        var key = event.key;
        this.#onDown(key);
    }

    static #onMouseUp(event){
        var button = event.button;
        this.#onUp(button);
    }

    static #onUp(key){

        // define that the current key is inactive
        this.#currentKeyStates[key] = false;

        // If the current keys pressed value is defined set it to not pressed
        if(this.#isKeyPressed !== undefined){
            this.#isKeyPressed[key] = false;
        }

        // If the current keys realease value is defined set it to released
        if (this.#isKeyReleased[key] !== undefined){
            this.#isKeyReleased[key] = true;
        }
    }

    static #onKeyUp(event){
        var key = event.key;
        this.#onUp(key);
    }


    static update(){
        this.#isUp = {};
        this.#isDown = {};
    }

    getPreviousPressedKey = () => this.#previousPressedKey;

    static getKey = (key) => {
        return this.#currentKeyStates[key];
    }

    static getKeyDown = (key) => {
        
        if (this.#isDown[key] == null){
            this.#isDown[key] = this.#getKeyDown(key);
        }

        return this.#isDown[key];
    }
    
    static getKeyUp = (key) => {
    
        if (this.#isUp[key] == null){
            this.#isUp[key] = this.#getKeyUp();
        }

        return this.#isUp[key];
    }

    static #getKeyDown = (key) => {
        
        // If the current key is not pressed or defined return false
        if(this.#currentKeyStates[key] === false) return false;
        if(this.#currentKeyStates[key] === undefined) return false;
        
        // If its not pressed define that  is pressed and return true
        if(this.#isKeyPressed[key] === false) {
            this.#isKeyPressed[key] = true;
            return true;
        }

        // If the keys pressed state is not defined define it as pressed and return true
        if (this.#isKeyPressed[key] === undefined) {
            this.#isKeyPressed[key] = true;
            return true;
        }

        return false;
    }

    static #getKeyUp(key){

        // If current key state is active or the state is undefined return false
        if (this.#currentKeyStates[key] === true) return false;
        if (this.#currentKeyStates[key] === undefined) return false;

        // If the key is released define say that its not released and return true
        if (this.#isKeyReleased[key] === true) {
            this.#isKeyReleased[key] = false;
            return true;
        }

        return false;
    }

}

Input.addEvents();
