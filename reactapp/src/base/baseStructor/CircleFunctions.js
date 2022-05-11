import { Vector2d } from "./Vector2d";

export function getPointsOnCircleCircumference(circleCenter, radius, anglesArray, towerPosition, lookDirection, clockwise = false) {
    let points = [];

    let lookAngle = lookDirection.getAngle();

    // console.log("circle center: " + circleCenter.x + ", " + circleCenter.y);

    anglesArray.forEach((angle) => {
        // inspired from https://stackoverflow.com/a/839931/12276054

        let totalAngle = angle - lookAngle - 90;

        // if (totalAngle > 360) totalAngle -= 360;
        // console.log("totalAngle: " + totalAngle + " - " + "angle: " + angle + " - " + "lookAngle: " + lookAngle);

        let radians = toRadians(totalAngle);

        
        let x = circleCenter.x + radius * Math.sin(radians);
        let y = circleCenter.y + radius * Math.cos(radians);
        x = parseFloat(x.toFixed(2));
        y = parseFloat(y.toFixed(2));

        let point = new Vector2d(x, y);
        
        points.push(point);
    });

    // if (clockwise) points = points.reverse();

    let closestPointFromToLook = getClosestVector(towerPosition, points);
    let closestIndex = points.indexOf(closestPointFromToLook);

    let reordedPoints = reorderArrayFromIndex(points, closestIndex);

    return reordedPoints;
}

function toDegrees(angle) {
    // from https://stackoverflow.com/a/9705160/12276054
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    // from https://stackoverflow.com/a/9705160/12276054
    return angle * (Math.PI / 180);
}

export function getAnglesEquallySpaces(numAngles, clockwise = false) {
    let angles = [];

    let angleDiff = Math.floor(360 / numAngles);

    if (clockwise) angleDiff *= -1;

    for (let index = 0; index < numAngles; index++) {
        let angle = angleDiff * index + (angleDiff * 1.5);
        angles.push(angle);

        // var theta = ((Math.PI*2) / numAngles);
        // var angle = (theta * index);
        // angles.push(angle);
    }

    return angles;
}

export function getAnglesEquallySpacesFromEndAngle(numAngles, endAngle) {
    let angles = [];

    let angleDiff = 360 / numAngles;

    for (let index = 0; index < numAngles; index++) {
        let angle = Math.floor(angleDiff * index + endAngle);
        angles.push(angle);
    }

    let reversedAngles = angles.reverse();

    return reversedAngles;
}

function getClosestVector(value, array) {
    let closestVector = array[0];
    let lowestDistance = Infinity;

    array.forEach((elem) => {
        if (Vector2d.distance(elem, value) < lowestDistance) closestVector = elem;
    });

    return closestVector;
}

function reorderArrayFromIndex(array, indexToStartFrom) {
    let tempArray = [];

    let tempIndex = indexToStartFrom;

    for (let index = 0; index < array.length; index++) {
        if (tempIndex >= array.length) tempIndex = 0;

        const element = array[tempIndex];

        tempArray.push(element);

        tempIndex += 1;
    }

    return tempArray;
}
