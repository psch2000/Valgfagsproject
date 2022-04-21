import { useEffect, useRef } from "react"
import "../css/index.css"


// Creates a HTML element that is used for drawing graphics on a 2d texture.
export const Canvas = ({width, height, onDraw}) => {

    const canvasRef = useRef(null);

    // Initializes the canvas and invokes it's onDraw function
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        onDraw(context);
    }, []);

    return <canvas className="Canvas"
        width={width}
        height={height}

        ref={canvasRef}
    ></canvas>
}
