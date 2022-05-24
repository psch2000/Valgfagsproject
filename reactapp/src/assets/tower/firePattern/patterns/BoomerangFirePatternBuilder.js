import { BoomerangProjectile } from "../../../composits/BoomerangProjectile";
import { FirePatternBuilder } from "../FirePatternBuilder";

export class BoomerangFirePatternBuilder {
    getProduct() {
        var builder = new FirePatternBuilder()
        .setProjectileType(BoomerangProjectile)
        .setRotateProjectile(true)
        .setFireForce(3)
        .setFireInterval(1.2)

        return builder.getProduct();
    }
}
