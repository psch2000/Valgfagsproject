


export class Input {

    static #currentKeyStates = {};
    static #isKeyPressed = {};
    static #isKeyReleased = {};
    static #previousPressedKey = {};

    static addEvents = () => {
        window.addEventListener('keydown', (event) => this.#onKeyDown(event), true);
        window.addEventListener('keyup', (event) => this.#onKeyUp(event), true);
    }

    static #onKeyDown(event){
        var key = event.key;
        this.#currentKeyStates[key] = true;
        this.#isKeyReleased[key] = false;

        this.#previousPressedKey = key;
    }

    static #onKeyUp(event){
        var key = event.key;

        this.#currentKeyStates[key] = false;

        if(this.#isKeyPressed !== undefined){
            this.#isKeyPressed[key] = false;
        }

        if (this.#isKeyReleased[key] !== undefined){
            this.#isKeyReleased[key] = true;
        }
        
    }

    getPreviousPressedKey = () => this.#previousPressedKey;

    static getKey = (key) => {
        return this.#currentKeyStates[key];
    }

    static getKeyDown = (key) => {
        if(this.#currentKeyStates[key] === false) return false;
        if(this.#currentKeyStates[key] === undefined) return false;
        
        if(this.#isKeyPressed[key] === false) {
            this.#isKeyPressed[key] = true;
            return true;
        }

        if (this.#isKeyPressed[key] === undefined) {
            this.#isKeyPressed[key] = true;
            return true;
        }

        return false;
    }

    static getKeyUp(key){
        if (this.#currentKeyStates[key] === true) return false;
        if (this.#currentKeyStates[key] === undefined) return false;

        if (this.#isKeyReleased[key] === true) {
            this.#isKeyReleased[key] = false;
            return true;
        }

        return false;
    }

}

Input.addEvents();
