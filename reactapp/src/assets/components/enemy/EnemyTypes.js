import { Enemy } from "./Enemy";


export function getRedEnemy(callbackFunctionWhenDead){
    return new Enemy(1,callbackFunctionWhenDead);
}