import { FirePatternBuilder } from "../FirePatternBuilder";


export class AreaFirePatthernBuilder{
    
    getProduct() {
        var builder = new FirePatternBuilder()
        .setIsArea(true);


        return builder.getProduct();
    }
}