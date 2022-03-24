import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import Small from './Small';

const Memories = () => {

    const { counter, increment } = useCounter(10)

    const [show, setShow] = useState(true)

    return (  
        <>
        <h1>Counter: <Small value={counter}/> </h1>
        <hr />
        <button className="btn btn-primary" onClick={()=>increment(1)}> +1</button>\

        <button className="btn btn-info" onClick={() =>setShow(!show)}>
            Show / Hide { JSON.stringify(show) }
        </button>
        </>
    );
}
 
export default Memories;