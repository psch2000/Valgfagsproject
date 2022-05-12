import { EventHandler } from "../../../base/baseBehaviour/EventHandler";

export class Bank{

    #balance;


    constructor(initBalance){
        this.#balance = initBalance;
        this.onSetBalance = new EventHandler();
    }

    add(amount){
        this.#balance += amount;
        this.onSetBalance.invoke();
    }

    remove(amount){
        this.#balance -= amount;
        this.onSetBalance.invoke();
    }

    getBalance(){
        return this.#balance;
    }
}