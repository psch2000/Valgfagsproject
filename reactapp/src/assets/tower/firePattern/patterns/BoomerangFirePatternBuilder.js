import { BoomerangProjectile } from "../../../composits/BoomerangProjectile";
import { FirePatternBuilder } from "../FirePatternBuilder";

export class BoomerangFirePatternBuilder {
    getProduct() {
        var builder = new FirePatternBuilder()
        .setProjectileType(BoomerangProjectile)
        .setFireForce(3)

        return builder.getProduct();
    }
}
