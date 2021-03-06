export class Component {
    constructor() {
        this.type = this.constructor.name;
        this.parent = null;
        this.transform = null;
        this.isActive = true;
    }

    setActive(value) {
        this.isActive = value;
    }

    onEnter(other) {}
    onOverlap(other) {}
    onExit(other) {}

    onStart() {}
    onUpdate() {}
    onDraw(context) {}

    onDestroy() {}

    getComponent(type) {
        if (this.parent == null) return;
        return this.parent.getComponent(type);
    }
}
