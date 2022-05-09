import { Input } from "./Input";


export class InputHandler {

    static #keyCommandPair = [];
    

    static addCommand = (key, command) => {
        this.#keyCommandPair.push({key, command});
    }

    static onUpdate = () => {
        this.#keyCommandPair.forEach(keyValue => {
            var key = keyValue.key;
            var command = keyValue.command;

            if (Input.getKeyDown(key) == true) command.onEnter();
            if (Input.getKey(key) == true) command.onExecute();
            if (Input.getKeyUp(key) == true) command.onExit();
        })
    }
}