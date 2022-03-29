import React from 'react';
 
import {shallow} from 'enzyme'
import TodoListItem from '../../../componets/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Prueba TodoListItem', () => { 
    
    const handleToggle = jest.fn()
    const handleDelete = jest.fn()
    const wrapper = shallow(
        <TodoListItem 
            todo={demoTodos[0]} 
            i={1} handleToggle={handleToggle} 
            handleDelete={handleDelete} 
        />
    )
    
    test('Debe mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe llamar la funcion borrar', () => { 

        wrapper.find('button').simulate('click')

        expect(handleDelete).toHaveBeenCalled()
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Number))
        
    })

    test('Debe llamar la funcion toogle', () => { 

        wrapper.find('p').simulate('click')

        expect(handleToggle).toHaveBeenCalledWith(expect.any(Number))
        
    })

    test('Debe mostrar el texto correctamente', () => { 

        const texto = wrapper.find('p').text().trim()

        expect(texto).toBe(`2.- ${demoTodos[0].desc}`)
        
    })

    test('Debe tener la clase complete si el TODO.done = true', () => { 

        const todo = demoTodos[0]
        todo.done = true

        const wrapper = shallow(
            <TodoListItem 
                todo={todo}
            />
        )
        expect(wrapper.find('p').hasClass('complete')).toBe(true)
        
    })

})