import { EventHandler } from "../../../base/baseBehaviour/EventHandler";


// Represents a bank, that contains and changes a balance.
export class Bank{

    #balance;


    constructor(initBalance){
        this.#balance = initBalance;
        this.onSetBalance = new EventHandler();
    }

    // Adds an amount to the balance.
    // And invokes the onSetBalance event.
    add(amount){
        this.#balance += amount;
        this.onSetBalance.invoke();
    }

    // Removes an amount from the balance.
    // And invokes the onSetBalance event.
    remove(amount){
        this.#balance -= amount;
        this.onSetBalance.invoke();
    }

    // Returns the current balance.
    getBalance(){
        return this.#balance;
    }
}