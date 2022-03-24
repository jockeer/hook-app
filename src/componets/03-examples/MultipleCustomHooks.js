import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import '../01-useState/counter.css'

const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1) 

    const { loading, data } =  useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0] //!la doble negacion '!!' en la condicion vuelve el valor null en false
    
    return (  
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            { loading 
                ? 
                <div className="alert alert-info text-center">
                    Loading...
                </div>
                : 
                <blockquote className="blockquote text-end">
                    <p className="mb-3">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            }

            <button className='btn btn-primary m-2' onClick={() => increment(1)}>Siguiente Quote</button>

            
        </div>
    );
}
 
export default MultipleCustomHooks;