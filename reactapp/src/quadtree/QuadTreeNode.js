
import { Vector2d } from "../base/baseStructor/Vector2d.js";
import { AABB } from "./AABB.js";


// Represents a part of a devided space in the game.
export class QuadTreeNode {
    
    constructor(pos, width, height, root = null){
        this.bounds = new AABB(pos, width, height);

        this.root = root == null ? this : root;

        this.aabbs = [];
        
        this.leafNodes = [];
        this.isLeafNode = true;
    }

    // Handles the given node
    handleNode(i){

        // If there is not enought AABBs dont continue.
        if (this.aabbs.length <= 1) return;

        // If we're on the fouth iteration define this as an end node and dont continue.
        if (i > 4){
            this.root.leafNodes.push(this);
            return;
        }
        

        // Split the current AABB into four smalle AABBs that fills up this AABB
        this.subdevide();


        // Add all the AABBs in this node to the right defined space in the devided spaces. 
        this.aabbs.forEach(aabb => {
            this.insert(this.topLeftNode, aabb);
            this.insert(this.topRightNode, aabb);
            this.insert(this.botLeftNode, aabb);
            this.insert(this.botRightNode, aabb);
        });

        // Handles the devided nodes.
        this.topLeftNode.handleNode(i + 1);
        this.topRightNode.handleNode(i + 1);
        this.botLeftNode.handleNode(i + 1);
        this.botRightNode.handleNode(i + 1);
    }

    // Inserts a AABB into a nodes AABB collection.
    insert(node, aabb){

        if (node.bounds.intersectsAABB(aabb)){
            node.aabbs.push(aabb);
        }
    }

    
    // Devides the current AABB into four equal sized spizes that defines this spaze
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