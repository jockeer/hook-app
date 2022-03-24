import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import ShowIncrement from './ShowIncrement'


const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter( counter +1)
    // }

    const increment = useCallback( num =>{
        setCounter( c => c + num)
    }, [ setCounter ])

    useEffect(() => {
      //???
    }, [increment])
    

    return ( 
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>

        </>
    );
}
 
export default CallBackHook;