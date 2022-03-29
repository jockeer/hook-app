import React from 'react';

import {shallow} from 'enzyme'
import { TodoAdd } from '../../../componets/08-useReducer/TodoAdd';

describe('Prueba TodoAdd', () => {  

    const handleAddTodo = jest.fn()
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo}/>)

    test('Debe mostrarse correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot()
        
    })

    test('NO debe llamar handleAddTodo', () => {  

        const formSubmit = wrapper.find('form').prop('onSubmit')
        
        formSubmit({preventDefault(){}})
        
        expect(handleAddTodo).toHaveBeenCalledTimes(0)
        
    })
    
    test('Debe llamar la funcion handleAddTodo', () => { 
        
        const value= 'Aprender MongoDB'
        const input = wrapper.find('input')
        input.simulate('change', { 
            target:{ 
                value, 
                name:'desc'
            } 
        })
        
        const formSubmit = wrapper.find('form').prop('onSubmit')
        
        formSubmit({preventDefault(){}})

        expect(handleAddTodo).toHaveBeenCalledTimes(1)
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc:value,
            done:false
        })

        expect(wrapper.find('input').prop('value')).toBe('')


    })
    

})