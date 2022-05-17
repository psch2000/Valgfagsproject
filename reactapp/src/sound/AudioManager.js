import { AudioSource } from "./AudioSource";


export class AudioManager{

    static #audioFilePath = [];
    static #audioSourceArrays = [];

    static addSound(name, filePath){
        this.#audioFilePath[name] = filePath;
        this.#audioSourceArrays[name] = [new AudioSource(filePath)];
    }

    static removeSound(name){
        this.#audioFilePath[name] = undefined;
        this.#audioSourceArrays[name] = undefined;
    }

    static play(name){
        if (this.#audioSourceArrays[name] == undefined) return;

        var audioSources = this.#audioSourceArrays[name];

        console.log(audioSources)
        for (let i = 0; i < audioSources.length; i++){

            var a = audioSources[i];

            if (a.isPlaying() == false){
                a.play();
                return;
            }
        }

        var newSource = new AudioSource(this.#audioFilePath[name]);
        this.#audioSourceArrays[name].push(newSource);
        newSource.play();
    }

}