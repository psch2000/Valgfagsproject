import { useState } from "react"

export const useForceRerenderer = () => {

    const [value, setValue] = useState(0);

    return () => setValue(value => value + 1);
}