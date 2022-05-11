import { Node } from "./Node";


export class BroadPhase{

    constructor(){
        this.endNodes = [];
    }

    handleNode(node){
        var sum = this.#getSum(node);
        var average = this.#getAverage(sum, node);

        var leftNode = this.#getLeftNode(average, node);
        leftNode.xAxis = !node.xAxis;
        leftNode.prevAverage = average;
        leftNode.isLeftNode = true;
        
        var rightNode = this.#getRightNode(average, node);
        rightNode.xAxis = !node.xAxis;
        rightNode.prevAverage = average;

        node.addNode(leftNode);
        node.addNode(rightNode);

    
        if (leftNode.colliders.length > 1){
            if (this.#canLeftContinue(leftNode, rightNode)){
                this.handleNode(leftNode);
            }
            else{
                this.endNodes.push(leftNode);
            }
        }
        else{
            this.endNodes.push(leftNode);
        }

        if (rightNode.colliders.length > 1){
            if (this.#canRightContinue(leftNode, rightNode)){
                this.handleNode(rightNode);
            }
            else{
                if (this.#canNotAddeRightNode(leftNode, rightNode) == false) return;
                this.endNodes.push(rightNode);
            }
        }
        else{
            this.endNodes.push(rightNode);
        }
       
        


    }

    #canNotAddeRightNode(leftNode, rightNode){
        return this.#canLeftContinue(leftNode, rightNode) == true && this.#canRightContinue(leftNode, rightNode) == false;
    }

    #canLeftContinue(leftNode, rightNode){
        for (let i = 0; i < leftNode.colliders.length; i++){
            var collider = leftNode.colliders[i];
            if (rightNode.colliders.includes(collider) == false){
                return true;
            }
        }

        return false;
    }

    #canRightContinue(leftNode, rightNode){
        for (let i = 0; i < rightNode.colliders.length; i++){
            var collider = rightNode.colliders[i];
            if (leftNode.colliders.includes(collider) == false){
                return true;
            }
        }

        return false;
    }

    #getRightNode(average, node){
        var rightNode = new Node();

        if (node.xAxis == true){
            node.colliders.forEach(c => {
                if (c.getRight() > average){
                    rightNode.addCollider(c);
                }
            });

            return rightNode;
        }

        node.colliders.forEach(c => {
            if (c.getBot() > average){
                rightNode.addCollider(c);
            }
        });

        return rightNode;
    }

    #getLeftNode(average, node){
        var leftNode = new Node();

        if (node.xAxis == true){
            node.colliders.forEach(c => {
                if (c.getLeft() < average){
                    leftNode.addCollider(c);
                }
            });

            return leftNode;
        }

        
        node.colliders.forEach(c => {
            if (c.getTop() < average){
                leftNode.addCollider(c);
            }
        });

        return leftNode;
    }


    #getAverage(sum, node){
        return sum / node.colliders.length;
    }
    
    #getSum(node){
        var sum = 0;

        for (let i = 0; i < node.colliders.length; i++){
            if (node.xAxis == true) {
                sum += node.colliders[i].transform.position.x;
                continue;
            }

            sum += node.colliders[i].transform.position.y;
        }

        return sum;
    }
}