import { useState } from "react"

// A hook that forces a component to rerender, since its state is changed.
export const useForceRerenderer = () => {

    const [value, setValue] = useState(0);

    return () => setValue(value => value + 1);
}