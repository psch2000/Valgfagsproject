

// Represents a component of a tree structures hiracy
export class Component {
    


    // parent defines what component it's connected too
    // type defines type of (component)
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