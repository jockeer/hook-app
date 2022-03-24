import React, { useRef } from 'react';
import '../01-useState/counter.css'

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = ()=>{
        inputRef.current.select()
    }
    return (  
        <>
        <h1>Focus Screen</h1>
        <hr />
        <input 
            ref={inputRef}
            type="text" 
            className='form-control'
            placeholder='Su nombre'
        />
        <button className="btn btn-outline-primary mt-4" onClick={ handleClick }>
            Focus
        </button>
        </>
    );
}
 
export default FocusScreen;