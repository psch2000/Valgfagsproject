import { getKey, getKeyDown } from "../events/keyCodeEvents";


export const InputHandler = () =>{

    const commands = [];

    function addCommand(keyCode, command){
        var c = {keyCode, command};
        commands.push(c);
    }

    function update(){      
        commands.forEach(c => {
            if(getKey(c.keyCode) == true){
                c.command.execute();
            }
        })
    }

    return {addCommand,}
}
