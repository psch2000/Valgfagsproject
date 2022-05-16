import { Node } from "./Node";


export class BroadPhase{

    constructor(ctx){
        this.endNodes = [];
        this.ctx = ctx;
    }

    reset(){
        this.endNodes = [];
    }

    handleNode(node, i = 0){

        var sum = this.#getSum(node);
        var average = this.#getAverage(sum, node);

        // this.drawLine(average,node);


        var leftNode = this.#getLeftNode(average, node);
        leftNode.xAxis = !node.xAxis;
        leftNode.prevAverage = average;
        leftNode.isLeftNode = true;
        
        var rightNode = this.#getRightNode(average, node);
        rightNode.xAxis = !node.xAxis;
        rightNode.prevAverage = average;

        // node.addNode(leftNode);
        // node.addNode(rightNode);

        if (i == 3){
            this.endNodes.push(node);
            return;
        }
    
        if (leftNode.colliders.length > 1){
            this.handleNode(leftNode, i + 1);
        }
        else{
            this.endNodes.push(leftNode);
        }

        if (rightNode.colliders.length > 1){
            this.handleNode(rightNode, i + 1);
        }
        else{
            this.endNodes.push(rightNode);
        }

    }


    drawLine(average, node){

        this.ctx.strokeStyle = 'red';

        if (node.xAxis == true){

            this.ctx.moveTo(average, node.prevAverage)
            var height = window.innerHeight;
            var height = node.isLeftNode ? -height : height;
            this.ctx.lineTo(average, height);
            this.ctx.stroke();
            return;
        }

        var width = window.innerWidth;
        var width = node.isLeftNode ? -width : width;
        this.ctx.moveTo(node.prevAverage, average);
        this.ctx.lineTo(width, average);
        this.ctx.stroke();
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
                sum += node.colliders[i].getOrigo().x;
                continue;
            }

            sum += node.colliders[i].getOrigo().y;
        }

        return sum;
    }
}