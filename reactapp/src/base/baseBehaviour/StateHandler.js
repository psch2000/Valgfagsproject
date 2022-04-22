

export class StateHandler {

    constructor(state){
        this.state = state;
        state.context = this;
    }

    transitionTo(state){
        this.state = state;
        state.context = this;
    }

    execute(){
        this.state.execute();
    }


}