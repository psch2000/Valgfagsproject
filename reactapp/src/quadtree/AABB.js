

// Represents a Axis Aligned Boundry Box. Which is a rect that is aligned with the x and y axis.
export class AABB {

    constructor(position, width, height){
        this.position = position;
        this.width = width;
        this.height = height;
    }

    getLeft = () => this.position.x;
    getRight = () => this.position.x + this.width;
    getTop = () => this.position.y;
    getBottom = () => this.position.y + this.height;

    // Checks if a point is within a AABB
    contains(point){
        return (
            point.x > this.getLeft() &&
            point.x < this.getRight() &&
            point.y < this.getBottom() &&
            point.y > this.getTop()
        );
    }

    // Checks if an AABB intersects this AABB
    intersectsAABB(other){
        return (
            this.getRight() >= other.getLeft() &&
            this.getLeft() <= other.getRight() &&
            this.getTop() <= other.getBottom() &&
            this.getBottom() >= other.getTop()
        );
    }

    // Draws the AABB
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}