import { Composit } from "../../../base/baseStructor/Composit";
import { FollowMouse } from "../FollowMouse";
import { SquareRenderer } from "../SquareRenderer";


export class Cursor extends Composit{

    constructor(){
        super();
        this.addComponent(new FollowMouse());
        this.addComponent(new SquareRenderer(2, 2, 'red'));
    }
}