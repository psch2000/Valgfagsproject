
export class Node {


    constructor(){
        this.colliders = [];
        this.nodes = [];

        this.xAxis = false;
        this.isLeftNode = false;
        this.prevAverage = 0;
    }

    addCollider(collider){
        this.colliders.push(collider);
    }

    addNode(node){
        this.nodes.push(node);
    }
}