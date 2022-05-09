import { FirePatternBuilder } from "../FirePatternBuilder"


export const TrippleFirePattern = (color, parent) => {


    var builder = new FirePatternBuilder()
    .addFireAngle(45)
    .addFireAngle(-45)
    .setColor(color)
    .setParent(parent);


    return builder.getProduct();
}