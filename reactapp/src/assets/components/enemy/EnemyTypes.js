import { Enemy } from "./Enemy";

const enemyTypesHealth = {
    "red": 1,
    "blue": 2,
    "green": 3,
    "yellow": 4,
    "pink": 5,
    "black": 6,
    "purple": 7,
    "white": 8
}

export function getEnemy(color, callbackFunctionWhenDead) {
    let enemyHealth = enemyTypesHealth[color];
    return new Enemy(enemyHealth, callbackFunctionWhenDead);
}
