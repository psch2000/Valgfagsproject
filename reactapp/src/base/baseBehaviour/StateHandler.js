

export class StateHandler {

    constructor(state){
        this.state = state;
    }

    setState(state){
        this.state = state;
        state.context = this;
    }

    execute(){
        this.state.execute();
    }


}