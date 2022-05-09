import { FirePatternBuilder } from "../FirePatternBuilder"


export const SingleFirePattern = (color, parent) => {

    var builder = new FirePatternBuilder()
    .setColor(color)
    .setParent(parent);

    return builder.getProduct();
}