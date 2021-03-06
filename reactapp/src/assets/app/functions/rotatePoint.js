import { Vector2d } from "../../../base/baseStructor/Vector2d";


// Returns a point that is rotate around the center at a given radians.
export function rotatePoint(point, center, radians){
    var rotatedX = Math.cos(radians) * (point.x - center.x) - Math.sin(radians) * (point.y-center.y) + center.x;
    var rotatedY = Math.sin(radians) * (point.x - center.x) + Math.cos(radians) * (point.y - center.y) + center.y;
    return new Vector2d(rotatedX, rotatedY);
}