import { Component } from "../../base/baseStructor/Component";


export class Bank extends Component{

    constructor(initBalance){
        super();
        this.balance = initBalance;
        this.textComp = null;
    }


    onStart(){
        this.textComp = this.parent.getComponent('DrawText');
    }

    add(amount){
        this.balance += amount;
    }

    remove(amount){
        this.balance -= amount;
    }

    onUpdate(){
        this.textComp.text = "$" + this.balance;
    }
}