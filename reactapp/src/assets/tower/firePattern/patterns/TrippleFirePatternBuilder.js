import { FirePatternBuilder } from "../FirePatternBuilder"


export class TrippleFirePatternBuilder {


    getProduct(){
        var builder = new FirePatternBuilder()
        .addFireAngle(45)
        .addFireAngle(-45);


        return builder.getProduct();
    }
}