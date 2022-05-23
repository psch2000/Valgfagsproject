import { FirePatternBuilder } from "../FirePatternBuilder"

export class CanonFirePatternBuilder {


    getProduct(){
        var builder = new FirePatternBuilder()
        .setFireForce(2.5)
        .setFireInterval(1.8)
        .setRotateProjectile(true)

        return builder.getProduct();
    }

    

}