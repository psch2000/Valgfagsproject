import { FirePatternBuilder } from "../FirePatternBuilder"


export class TackShooterFirePatternBuilder {
    
    getProduct(){
        var builder = new FirePatternBuilder()
        .addFireAngles([45, 90, 135, 180, 225, 270, 315])
        .setIsFollowingTarget(false)
        .setIsBursting(true);
    
        return builder.getProduct();
    }


    

}