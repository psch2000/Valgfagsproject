import { FirePatternBuilder } from "../FirePatternBuilder";

export class AreaFirePatthernBuilder{
    
    getProduct() {
        var builder = new FirePatternBuilder()
        .setIsArea(true)
        .setFireInterval(2);


        return builder.getProduct();
    }
}