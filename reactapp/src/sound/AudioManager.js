import { AudioSource } from "./AudioSource";


// Handles audio.
export class AudioManager{

    static #audioFilePath = [];
    static #audioSourceArrays = [];

    // Adds a new audio source to the manager.
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

    // Play a sound with a given name.
    static play(name){

        // Dosnt play if the source dosnt exist.
        if (this.#audioSourceArrays[name] == undefined) return;

        var audioSources = this.#audioSourceArrays[name];

        for (let i = 0; i < audioSources.length; i++){

            var a = audioSources[i];


            // If a source is not playing.
            if (a.isPlaying() == false){
                a.play();
                return;
            }

            // If a source is looping.
            if (a.loop == true){
                return;
            }
        }

        // Adds a new source and plays the audio, since previouse sources are playing.
        var newSource = new AudioSource(this.#audioFilePath[name]);
        this.#audioSourceArrays[name].push(newSource);
        newSource.play();
    }

}