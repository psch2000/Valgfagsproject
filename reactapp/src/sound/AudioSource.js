

export class AudioSource{

    #filePath;
    #audio;
    constructor(filePath){
        this.#filePath = filePath;
        this.#audio = new Audio(filePath);
    }

    getFilePath = () => this.#filePath;

    setFilePath(value){
        this.#filePath = value;
        this.#audio.src = value;
    }

    isPlaying(){
        return this.#audio.paused == false;
    }

    play(){
        this.#audio.play();
    }

    

}