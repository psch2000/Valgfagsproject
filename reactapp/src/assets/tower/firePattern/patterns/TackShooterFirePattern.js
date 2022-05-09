import { FirePatternBuilder } from "../FirePatternBuilder"


export const TackShooterFirePattern = (color, parent) => {
    
    var builder = new FirePatternBuilder()
    .addFireAngles([45, 90, 135, 180, 225, 270, 315])
    .setIsFollowingTarget(false)
    .setColor(color)
    .setIsBursting(true)
    .setParent(parent);

    return builder.getProduct();

    

}