import { AudioSource } from "./AudioSource";


export class AudioManager{

    static #audioFilePath = [];
    static #audioSourceArrays = [];

    static addSound(name, filePath, loop = false){
        this.#audioFilePath[name] = filePath;
        var source = new AudioSource(filePath, loop);
        source.loop = loop;
        this.#audioSourceArrays[name] = [source];

    }

    static removeSound(name){
        this.#audioFilePath[name] = undefined;
        this.#audioSourceArrays[name] = undefined;
    }

    static play(name){
        if (this.#audioSourceArrays[name] == undefined) return;

        var audioSources = this.#audioSourceArrays[name];

        for (let i = 0; i < audioSources.length; i++){

            var a = audioSources[i];


            if (a.isPlaying() == false){
                a.play();
                return;
            }

            if (a.loop == true){
                return;
            }
        }

        var newSource = new AudioSource(this.#audioFilePath[name]);
        this.#audioSourceArrays[name].push(newSource);
        newSource.play();
    }

}