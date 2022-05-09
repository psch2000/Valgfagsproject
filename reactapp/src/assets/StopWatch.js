

export class StopWatch{

    #startTime;
    #stopTime;

    start(){
        this.#startTime = new Date().getTime();
    }

    stop(){
        this.#stopTime = new Date().getTime();
    }

    getTime(){
        return (this.#stopTime - this.#startTime) / 1000;
    }

}