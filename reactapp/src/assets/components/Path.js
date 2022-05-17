import { Component } from "../../base/baseStructor/Component";
import { Vector2d } from "../../base/baseStructor/Vector2d";
import { RectangleCollider } from "../../base/baseStructor/collider/RectangleCollider";
import { Composit } from "../../base/baseStructor/Composit";
import { SquareRenderer } from "./SquareRenderer";
import { instantiate } from "../app/functions/instantiate";
import { Intersect } from "../../base/baseStructor/Intersect";
import { PathRectangle } from "./PathRectangle";

export class Path extends Component {
    constructor(waypointsArray, pathColor = "#00000000", pathWidth = 10) {
        super();
        this.waypoints = waypointsArray;
        this.rectangles = [];
        this.pathWidth = pathWidth;
        this.pathColor = pathColor;
    }

    createRectanglesOnPath() {
        this.#createRectanglesOnPath();
    }

    #createRectanglesOnPath() {
        for (let i = 0; i < this.waypoints.length; i++) {
            if (i === 0) continue;

            // renaming only
            let waypoint1 = this.waypoints[i - 1];
            let waypoint2 = this.waypoints[i];

            // get what direction waypoint2 is compared to waypoint1
            let direction = getDirection(waypoint1, waypoint2);

            let [width, height] = this.#getRectangleWidthHeight(direction, waypoint1, waypoint2);

            // figure out which waypoint if the top left corner of the rectangle
            let topLeft = direction.equals(Vector2d.down) || direction.equals(Vector2d.right) ? waypoint1 : waypoint2;

            // create rectangle
            let rectangle = new RectangleCollider(width, height, true);
            rectangle.transform.position = topLeft;

            this.rectangles.push(rectangle);

            // create and instantiate path rectangles
            this.#createCanvasRectangle(rectangle);
        }
    }

    #getRectangleWidthHeight(direction, waypoint1, waypoint2) {
        // calculate width and height of rectangle for waypoint1 and waypoint2 - dependent of the direction
        let width =
            direction.equals(Vector2d.up) || direction.equals(Vector2d.down)
                ? this.pathWidth
                : Math.abs(waypoint2.x - waypoint1.x) + this.pathWidth; // + this.pathWidth to avoid corner gaps
        let height =
            direction.equals(Vector2d.left) || direction.equals(Vector2d.right)
                ? this.pathWidth
                : Math.abs(waypoint2.y - waypoint1.y) + this.pathWidth; // + this.pathWidth to avoid corner gaps

        return [width, height];
    }

    #createCanvasRectangle(rectangle) {
        let canvasRectangle = new Composit("pathRectangle");
        canvasRectangle.transform.position = rectangle.transform.position;
        canvasRectangle.addComponent(new SquareRenderer(rectangle.width, rectangle.height, this.pathColor));
        canvasRectangle.addComponent(rectangle);
        canvasRectangle.addComponent(new PathRectangle());
        instantiate(canvasRectangle);
    }

    doesOverlapPath(other) {
        for (let i = 0; i < this.rectangles.length; i++) {
            if (Intersect.intersects(other, this.rectangles[i])) return true;
        }
        return false;
    }
}

function getDirection(vector1, vector2) {
    if (vector2.x > vector1.x) return Vector2d.right;
    if (vector2.x < vector1.x) return Vector2d.left;
    if (vector2.y < vector1.y) return Vector2d.up;
    if (vector2.y > vector1.y) return Vector2d.down;
}
