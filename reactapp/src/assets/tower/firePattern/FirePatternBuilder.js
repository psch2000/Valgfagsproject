import { FirePattern } from "./FirePattern";


export class FirePatternBuilder {

    #firePattern;

    constructor(){
        this.#firePattern = new FirePattern();
    }

    #reset(){
        this.#firePattern = new FirePattern();
    }

    addFireAngle(angle){
        this.#firePattern.fireAngels.push(angle);
        return this;
    }

    addFireAngles(angleRange){
        angleRange.forEach(angle => {
            this.#firePattern.fireAngels.push(angle);       
        });

        return this;
    }

    setFireForce(value){
        this.#firePattern.fireForce = value;
        return this;
    }

    setFireInterval(value){
        this.#firePattern.fireInterval = value;
        return this;
    }

    setParent(parent){
        this.#firePattern.parent = parent;
        return this;
    }
    
    setColor(color){
        this.#firePattern.color = color;
        return this;
    }

    setIsBursting(value){
        this.#firePattern.burst = value;
        return this;
    }

    setIsFollowingTarget(value){
        this.#firePattern.followTarget = value;
        return this;
    }

    setProjectileType(value) {
        this.#firePattern.projectileType = value;
        return this;
    }

    setOffsetFire(value){
        this.#firePattern.offsetFire = value;
        return this;
    }

    addOffset(offset){
        this.#firePattern.offsets.push(offset);
        return this;
    }

    getProduct(){
        var product = this.#firePattern;
        this.#reset();
        return product;
    }

    setIsArea(value){
        this.#firePattern.isArea = value;
        return this;
    }

}