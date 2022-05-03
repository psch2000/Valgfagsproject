import { CircleCollider } from "./collider/CircleCollider";
import { RectangleCollider } from "./collider/RectangleCollider";

export class Intersect {
    static intersects(first, second) {
        const SUPPORTED_INTERSECT_CLASSES = [CircleCollider, RectangleCollider];

        // if either first or second class are not supported, throw an error
        if (
            SUPPORTED_INTERSECT_CLASSES.includes(first.constructor) === false ||
            SUPPORTED_INTERSECT_CLASSES.includes(second.constructor) === false
        ) {
            throw new Error("use of not supprted classes in Intersect.intersects");
        }

        // both Rectangle instances
        if (first.constructor === RectangleCollider && second.constructor === RectangleCollider) {
            return Intersect.rectangles(first, second);
        }

        // one Rectangle and one Circle instance
        if (
            (first.constructor === RectangleCollider && second.constructor === CircleCollider) ||
            (first.constructor === CircleCollider && second.constructor === RectangleCollider)
        ) {
            let rectangleObject = first.constructor === RectangleCollider ? first : second;
            let circleObject = first.constructor === CircleCollider ? first : second;

            return Intersect.rectangleCircle(rectangleObject, circleObject);
        }

        // both Circle instances
        if (first.constructor === CircleCollider && second.constructor === CircleCollider) {
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
        let firstLeft = firstRect.transform.position.x;
        let firstRight = firstRect.transform.position.x + firstRect.width;
        let firstTop = firstRect.transform.position.y;
        let firstBottom = firstRect.transform.position.y + firstRect.height;

        let secondLeft = secondRect.transform.position.x;
        let secondRight = secondRect.transform.position.x + secondRect.width;
        let secondTop = secondRect.transform.position.y;
        let secondBottom = secondRect.transform.position.y + secondRect.height;

        return firstLeft < secondRight && firstRight > secondLeft && firstTop < secondBottom && firstBottom > secondTop;
    }

    static circles(firstCircle, secondCircle) {
        // code inspired from https://stackoverflow.com/a/8367547/12276054

        let deltaDistanceFromCenterSquared =
            Math.pow(firstCircle.transform.position.x - secondCircle.transform.position.x, 2) +
            Math.pow(firstCircle.transform.position.y - secondCircle.transform.position.y, 2);

        return deltaDistanceFromCenterSquared <= Math.pow(firstCircle.radius + secondCircle.radius, 2);
    }
}
