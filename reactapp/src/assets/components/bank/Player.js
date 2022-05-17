import { PlayerBase } from "../PlayerBase";
import { Bank } from "./Bank";


export class Player {
    static bank = new Bank(10000);
    static base = new PlayerBase(100);
}