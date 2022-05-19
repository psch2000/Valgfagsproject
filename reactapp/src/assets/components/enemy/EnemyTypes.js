import { Enemy } from "./Enemy";


export function getRedEnemy(callbackFunctionWhenDead){
    return new Enemy(1,callbackFunctionWhenDead);
}

export function getBlueEnemy(callbackFunctionWhenDead){
    return new Enemy(2,callbackFunctionWhenDead);
}

export function getGreenEnemy(callbackFunctionWhenDead){
    return new Enemy(3,callbackFunctionWhenDead);
}

export function getYellowEnemy(callbackFunctionWhenDead){
    return new Enemy(4,callbackFunctionWhenDead);
}

export function getPinkEnemy(callbackFunctionWhenDead){
    return new Enemy(5,callbackFunctionWhenDead);
}

export function getBlackEnemy(callbackFunctionWhenDead){
    return new Enemy(6,callbackFunctionWhenDead);
}

export function getPurpleEnemy(callbackFunctionWhenDead){
    return new Enemy(7,callbackFunctionWhenDead);
}

export function getWhiteEnemy(callbackFunctionWhenDead){
    return new Enemy(8,callbackFunctionWhenDead);
}
