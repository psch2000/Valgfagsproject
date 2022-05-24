import {  useEffect, useRef, useState } from "react";
import { OnEndResize } from "../../../events/OnEndResize";
import { App } from "../../app/App";
import { useForceRerenderer } from "../../hooks/useForceRenderer";
import { useRect } from "../../hooks/useRect";


// A react component that makes a canvas element.
export const CanvasComponent = ({canvas}) => {

    const rect = useRect(canvas.rect);
    const rerenderer = useForceRerenderer();
    const canvasRef = useRef(null);

    const style = {
        left: `${rect.x}px`,
        top: `${rect.y}px`,
    }

    useEffect(() => {
        canvas.context = canvasRef.current.getContext('2d');
        OnEndResize.addListener(onEndResize);
    }, [])

    const onEndResize = () => {
        rect.setRect(App.windowRect);
    }
 


    return <canvas className="absolute" style={style} ref={canvasRef} width={rect.width} height={rect.height}></canvas>

}