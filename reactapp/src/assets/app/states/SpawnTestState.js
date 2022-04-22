import { State } from "../../../base/baseBehaviour/State"
import { SpawnOtherTestState } from "./SpawnOtherTestState";

export class SpawnTestState extends State {

    constructor(){
        super();
    }

    execute(){
        console.log("Is spawning test state...");
        
        console.log("Going to SpawnOtherTestState...");
        this.context.transitionTo(new SpawnOtherTestState());
        this.context.execute();
        

    }
}