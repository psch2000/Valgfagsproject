import React, { useEffect } from "react"
import { Canvas } from "./Canvas"


export const App = () => {
    

    const onDraw = (context) => {
        context.fillStyle = "blue";
        context.fillRect(0, 0, 1000, 1000);
        context.fillStyle = "black";

        // Set line width
        context.lineWidth = 10;

        // Wall
        context.strokeRect(75, 140, 150, 110);

        // Door
        context.fillRect(130, 190, 40, 60);

        // Roof
        context.beginPath();
        context.moveTo(50, 140);
        context.lineTo(150, 60);
        context.lineTo(250, 140);
        context.closePath();
        context.stroke();
    }

    return <div>
        <Canvas width={1000} height={1000} onDraw={onDraw}></Canvas>
    </div>
}