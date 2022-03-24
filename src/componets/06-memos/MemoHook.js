import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

const MemoHook = () => {

    const { counter, increment } = useCounter(5000)

    const [show, setShow] = useState(true)



    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (  
        <>
        <h1>Memo Hook</h1>
        <h3>Counter: <small>{counter}</small> </h3>
        <hr />
        <p>{ memoProcesoPesado }</p>
        
        <button className="btn btn-primary" onClick={()=>increment(1)}> +1</button>\

        <button className="btn btn-info" onClick={() =>setShow(!show)}>
            Show / Hide { JSON.stringify(show) }
        </button>
        </>
    );
}
 
export default MemoHook;