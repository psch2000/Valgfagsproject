import { PlayerBase } from "../PlayerBase";
import { Bank } from "./Bank";

// Makes a player that has a base and a bank.
export class Player {
    static bank = new Bank(300);
    static base = new PlayerBase(100);
}