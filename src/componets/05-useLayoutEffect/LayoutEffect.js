import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import './layout.css'

const LayoutEffect = () => {
    
    const { counter, increment } = useCounter(1) 

    const { loading, data } =  useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0] 
    
    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])

    return (  
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p className="mb-3" ref={pTag}>{quote}</p>
            </blockquote>

            <pre>{JSON.stringify(boxSize, null, 3) }</pre>

            <button className='btn btn-primary m-2' onClick={() => increment(1)}>Siguiente Quote</button>

            
        </div>
    );
}
 
export default LayoutEffect;