import { Vector2d } from "../../../../base/baseStructor/Vector2d";
import { FirePatternBuilder } from "../FirePatternBuilder";


export class SuperMonkeyFirePattern {

    getProduct(){
        var builder = new FirePatternBuilder()
        .addOffset(new Vector2d(0, 20))
        .addOffset(new Vector2d(0, -20))
        .setOffsetFire(true)
        .setFireInterval(.03)
        .setFireForce(10)
        .setRotateProjectile(true);


        return builder.getProduct();
    }
}