import { Enemy } from "./Enemy";

export const enemyTypesHealth = {
    "red": 1,
    "blue": 2,
    "green": 3,
    "yellow": 4,
    "pink": 5,
    "black": 6,
    "purple": 7,
    "white": 8
}

export function getEnemy(type, releaseFunction, callbackFunctionWhenDead) {
    let enemyHealth = enemyTypesHealth[type];
    return new Enemy(enemyHealth, releaseFunction, callbackFunctionWhenDead);
}
