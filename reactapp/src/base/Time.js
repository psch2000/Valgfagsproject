// Defines the games time
export class Time {

    // Defies the time between previous and current frame.
    static deltaTime;
    static #currentTime;
    static #previousTime = this.#getDateTime();

    static update(){
        this.#currentTime = this.#getDateTime();
        this.deltaTime = (this.#currentTime - this.#previousTime) / 1000;
        this.#previousTime = this.#currentTime;
    }

    static #getDateTime(){
        return new Date().getTime();
    }

}