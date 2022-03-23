import { useState } from "react";

const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState(initialState)

    const increment = (factor = 1)=>{
        setState(state + factor )
    }
    const descrement = (factor = 1)=>{
        setState(state - factor )
    }
    const reset = ()=>{
        setState(initialState)
    }

    return {
        state,
        increment,
        descrement,
        reset
    }
}
 
export default useCounter;