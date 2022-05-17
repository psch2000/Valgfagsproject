
import { Vector2d } from "../base/baseStructor/Vector2d.js";
import { AABB } from "./AABB.js";


export class QuadTreeNode {
    
    constructor(pos, width, height, root = null){
        this.bounds = new AABB(pos, width, height);

        this.root = root == null ? this : root;

        this.aabbs = [];
        
        this.leafNodes = [];
        this.isLeafNode = true;
    }

    handleNode(i){

        if (this.aabbs.length <= 1) return;

        if (i > 4){
            this.root.leafNodes.push(this);
            return;
        }
        

        this.subdevide();


        this.aabbs.forEach(aabb => {
            this.insert(this.topLeftNode, aabb);
            this.insert(this.topRightNode, aabb);
            this.insert(this.botLeftNode, aabb);
            this.insert(this.botRightNode, aabb);
        });

        this.topLeftNode.handleNode(i + 1);
        this.topRightNode.handleNode(i + 1);
        this.botLeftNode.handleNode(i + 1);
        this.botRightNode.handleNode(i + 1);
    }

    insert(node, aabb){

        if (node.bounds.intersectsAABB(aabb)){
            node.aabbs.push(aabb);
        }
    }

    
    subdevide(){
        var {position, width, height} = this.bounds;
        var halfWidth = width/2;
        var halfHeight = height/2;

        this.topLeftNode = new QuadTreeNode(position, halfWidth, halfHeight, this.root);
        this.topLeftNode.layer = this.layer + 1;
        
        var topRightPos = new Vector2d(position.x + halfWidth, position.y);
        this.topRightNode = new QuadTreeNode(topRightPos, halfWidth, halfHeight, this.root);

        var botLeftPos = new Vector2d(position.x, position.y + halfHeight);
        this.botLeftNode = new QuadTreeNode(botLeftPos, halfWidth, halfHeight, this.root);

        var botRightPos = new Vector2d(position.x + halfWidth, position.y + halfHeight);
        this.botRightNode = new QuadTreeNode(botRightPos, halfWidth, halfHeight, this.root);
    }


    draw(ctx){
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        var {x, y} = this.bounds.position;
        var {width, height} = this.bounds;
        ctx.rect(x, y, width, height);
        ctx.stroke();

        if (this.topLeftNode == null){
            ctx.closePath();
            return;
        }
        this.topLeftNode.draw(ctx);
        this.topRightNode.draw(ctx);
        this.botLeftNode.draw(ctx);
        this.botRightNode.draw(ctx);

    }
    
}