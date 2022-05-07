// import { CircleCollider } from "./collider/CircleCollider";
// import { RectangleCollider } from "./collider/RectangleCollider";

import { Vector2d } from "./Vector2d";

export class Intersect {
    static intersects(first, second) {
        const SUPPORTED_INTERSECT_CLASSES = ["CircleCollider", "RectangleCollider"];

        // if either first or second class are not supported, throw an error
        if (
            SUPPORTED_INTERSECT_CLASSES.includes(first.constructor.name) === false ||
            SUPPORTED_INTERSECT_CLASSES.includes(second.constructor.name) === false
        ) {
            throw new Error("use of not supprted classes in Intersect.intersects");
        }

        // both Rectangle instances
        if (first.constructor.name === "RectangleCollider" && second.constructor.name === "RectangleCollider") {
            return Intersect.rectangles(first, second);
        }

        // one Rectangle and one Circle instance
        if (
            (first.constructor.name === "RectangleCollider" && second.constructor.name === "CircleCollider") ||
            (first.constructor.name === "CircleCollider" && second.constructor.name === "RectangleCollider")
        ) {
            let rectangleObject = first.constructor.name === "RectangleCollider" ? first : second;
            let circleObject = first.constructor.name === "CircleCollider" ? first : second;

            return Intersect.rectangleCircle(rectangleObject, circleObject);
        }

        // both Circle instances
        if (first.constructor.name === "CircleCollider" && second.constructor.name === "CircleCollider") {
            return Intersect.circles(first, second);
        }
    }

    static rectangleCircle(rect, circle) {
        // code from https://stackoverflow.com/a/21096179/12276054

        var distX = Math.abs(circle.transform.position.x - rect.transform.position.x - rect.width / 2);
        var distY = Math.abs(circle.transform.position.y - rect.transform.position.y - rect.height / 2);

        if (distX > rect.width / 2 + circle.radius) return false;
        if (distY > rect.height / 2 + circle.radius) return false;

        if (distX <= rect.width / 2) return true;
        if (distY <= rect.height / 2) return true;

        var dx = distX - rect.width / 2;
        var dy = distY - rect.height / 2;
        return dx * dx + dy * dy <= circle.radius * circle.radius;
    }

    static rectangles(firstRect, secondRect) {
        // code inspired from https://silentmatt.com/rectangle-intersection/

        let firstTopLeft = firstRect.transform.position.copy();
        let firstBottomRight = new Vector2d(
            firstRect.transform.position.x + firstRect.width,
            firstRect.transform.position.y + firstRect.height
        );

        let secondTopLeft = secondRect.transform.position.copy();
        let secondBottomRight = new Vector2d(
            secondRect.transform.position.x + secondRect.width,
            secondRect.transform.position.y + secondRect.height
        );

        return (
            firstTopLeft.x < secondBottomRight.x &&
            firstBottomRight.x > secondTopLeft.x &&
            firstTopLeft.y < secondBottomRight.y &&
            firstBottomRight.y > secondTopLeft.y
        );
    }

    static circles(firstCircle, secondCircle) {
        // code inspired from https://stackoverflow.com/a/8367547/12276054

        let deltaDistanceFromCenterSquared =
            Math.pow(firstCircle.transform.position.x - secondCircle.transform.position.x, 2) +
            Math.pow(firstCircle.transform.position.y - secondCircle.transform.position.y, 2);

        return deltaDistanceFromCenterSquared <= Math.pow(firstCircle.radius + secondCircle.radius, 2);
    }
}
