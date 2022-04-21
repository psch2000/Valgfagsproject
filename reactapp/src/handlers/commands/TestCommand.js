import { Command } from "../Command";


export class TestCommand extends Command {

    constructor(){
        super();
    }

    execute(){
        console.log("j");
    }
}