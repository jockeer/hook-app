import { useEffect, useRef, useState } from "react";


const useFetch = ( url ) => {

    const isMounted = useRef(true); //! el useRef nos servira para verificar que el componente este montado para setear su estado
    
    const [state, setState] = useState({
        data: null, //!mejor trabajar con arreglos vacios 
        loading: true, 
        error:null 
    })

    useEffect(()=>{
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect(()=>{

        setState({data:null, loading:true,error:null})

        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
        
    }, [ url ])

    return state

}
 
export default useFetch;