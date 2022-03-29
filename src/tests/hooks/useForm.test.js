import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm'


describe('Prueba en useForm', () => { 
    
    const initialForm = {
        name: 'Daniel',
        email: 'dgorianz@gmail.com'
    }

    test('Debe regresar un formulario por defecto', () => { 

        const { result } = renderHook( () => useForm( initialForm ) )
        const [ values, handleInputChange, reset ] = result.current
        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')

    })

    test('Debe cambiar el valor del formulario (cambiar name)', () => { 

        const { result } = renderHook( () => useForm( initialForm ) )
        const [ , handleInputChange ] = result.current

        act( () => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Oscar'
                }
            })
        })

        const [ formvalues ] = result.current
        expect(formvalues).toEqual({...initialForm, name:'Oscar'})
        

    })

    test('debe reinciar los valores a vacios', () => { 

        const { result } = renderHook( () => useForm( initialForm ) )
        const [ , handleInputChange, reset ] = result.current

        act( () => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Oscar'
                }
            })

            reset()

        })

        const [ formvalues ] = result.current
        expect(formvalues).toEqual(initialForm)

    })

    
})