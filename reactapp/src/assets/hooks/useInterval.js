import { useEffect, useRef } from "react"

// A async hook that repeatedly calls a function
export const useInterval = (callback, interval) => {
    const _callbackRef = useRef(callback);

    useEffect(() => {

        const tick = () => {
            _callbackRef.current();
        }

        if (interval !== null) {
            let id = setInterval(tick, interval);
            return () => clearInterval(id);
        }
    }, [interval]);
  }