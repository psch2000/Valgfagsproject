import { FirePatternBuilder } from "../FirePatternBuilder"


export class TrippleFirePatternBuilder {


    getProduct(){
        var builder = new FirePatternBuilder()
        .addFireAngles([45, -45])
        .setIsBursting(true);

        return builder.getProduct();
    }
}