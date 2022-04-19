import { useEffect, useRef, useState } from "react";


export const useCanvas = (canvasHTML) => {
    
    const canvasRef = useRef(canvasHTML);
    const [context, setContext] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        setContext(canvas.getContext('2d'));
    })

    return {canvasRef, context}
}