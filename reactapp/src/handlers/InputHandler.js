

export class InputHandler {

    _commands;

    constructor(){
        this._commands = [];

    }


    addCommand(keyCode, command){
        this._commands.push({keyCode, command});
    }

}
