import { useState } from "react"

// A hook that represents a rectangle
export const useRect = (initRect) =>{
    const [x, setX] = useState(initRect.x);
    const [y, setY] = useState(initRect.y);
    const [width, setWidth] = useState(initRect.width);
    const [height, setHeight] = useState(initRect.height);

    const setRect = (rect) => {
        var {x,y, width, height} = rect;

        setX(x);
        setY(y);
        setWidth(width);
        setHeight(height);
    }

    return {x, y, width, height, setX, setY, setWidth, setHeight, setRect};
}