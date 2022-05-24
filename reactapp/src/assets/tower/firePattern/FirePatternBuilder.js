import { FirePattern } from "./FirePattern";


// A fire pattern builder that makes it easier to build towers.
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

    setLookAtTarget(value) {
        this.#firePattern.lookAtTarget = value;
        return this;
    }

    setProjectileType(value) {
        this.#firePattern.projectileType = value;
        return this;
    }

    setRotateProjectile(value) {
        this.#firePattern.rotateProjectile = value;
        return this;
    }

    addOffset(offset){
        this.#firePattern.offsets.push(offset);
        return this;
    }
    
    setOffsetFire(value){
        this.#firePattern.useOffsets = value;
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