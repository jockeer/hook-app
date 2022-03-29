import { renderHook, act } from "@testing-library/react-hooks"
import useCounter from "../../hooks/useCounter"

describe('Pruebas en useCounter', () => { 
    
    test('debe retornar valores por defecto', () => { 
        
        const { result } = renderHook( ()=> useCounter() )
        
        expect( result.current.counter ).toBe(10)
        expect( typeof result.current.increment ).toBe('function')
        expect( typeof result.current.descrement ).toBe('function')
        expect( typeof result.current.reset ).toBe('function')

    })

    test('debe tener el counter en 100', () => { 
        
        const { result } = renderHook( ()=> useCounter(100) )
        expect( result.current.counter ).toBe(100)

    })

    test('debe incrementar el counter en 1', () => { 
        
        const { result } = renderHook( ()=> useCounter(100) )
        const { increment } =  result.current

        act(() => {
            increment() //! si le manda un valor debe incremente el valor que le mande -> increment(2) = 102
        })

        expect( result.current.counter ).toBe(101)
    })

    test('debe decrementar el counter en 1', () => { 
        
        const { result } = renderHook( ()=> useCounter(100) )
        const { descrement } =  result.current

        act(() => {
            descrement() 
        })

        expect( result.current.counter ).toBe(99)
    })

    test('debe reiniciar el valor por defecto', () => { 
        
        const { result } = renderHook( ()=> useCounter(100) )
        const { increment, reset } =  result.current

        act(() => {
            increment()
            reset() 
        })

        expect( result.current.counter ).toBe(100)
    })

})