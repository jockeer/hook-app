import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css'

const CounterWhitCustomHook = () => {

    const { state, increment, descrement, reset } = useCounter(100)
    return ( 
        <>
        <h1>Counter with Hook: {state}</h1>
        <hr />

        <button onClick={() => increment(2)} className='btn '>+1</button>
        <button onClick={reset} className='btn '>reset</button>
        <button onClick={() => descrement(2)} className='btn '>-1</button>
        </>
    );
}
 
export default CounterWhitCustomHook;