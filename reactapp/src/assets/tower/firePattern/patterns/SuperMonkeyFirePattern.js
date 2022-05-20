import { Vector2d } from "../../../../base/baseStructor/Vector2d";
import { FirePatternBuilder } from "../FirePatternBuilder";


export class SuperMonkeyFirePattern {

    getProduct(){
        var builder = new FirePatternBuilder()
        .addOffset(new Vector2d(20, 0))
        .addOffset(new Vector2d(-20, 0))
        .setOffsetFire(true)
        .setRotateProjectile(true);

        return builder.getProduct();
    }
}