import { FirePatternBuilder } from "../FirePatternBuilder"


export class SingleFirePatternBuilder {


    getProduct(){
        var builder = new FirePatternBuilder()
        .setFireForce(4)
        .setFireInterval(0.5)
        .setRotateProjectile(true)

        return builder.getProduct();
    }

    

}

