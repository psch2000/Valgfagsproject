

export class Component {
    
    constructor() {
        this.type = this.constructor.name;
        this.parent = null;
        this.transform = null;
        this.isActive = true;
    }

    setActive(value){
        this.parent.isActive = value;
    }

    onOverlap(other) {}
    onStart(){}
    onUpdate(){}
    onDraw(context){}
}