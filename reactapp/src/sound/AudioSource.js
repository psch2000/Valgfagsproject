

export class AudioSource{

    #filePath;
    #audio;
    constructor(filePath, loop = false){
        this.#filePath = filePath;
        this.#audio = new Audio(filePath);
        this.#audio.loop = loop;
        this.#audio.autoplay = loop;
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