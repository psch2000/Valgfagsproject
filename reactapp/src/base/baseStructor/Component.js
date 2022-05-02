

export class Component {
    
    constructor() {
        this.type = this.constructor.name;
        this.parent = null;
        this.transform = null;
        this.isActive = true;
    }

    onStart(){}
    onUpdate(){}
    onDraw(context){}
}