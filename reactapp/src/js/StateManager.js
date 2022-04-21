

export class StateManager {

    constructor(state){
        this.state = state;
        state.context = this;
    }

    setState(state){
        this.state = state;
        state.context = this;
    }

    execute(){
        this.state.execute();
    }


}