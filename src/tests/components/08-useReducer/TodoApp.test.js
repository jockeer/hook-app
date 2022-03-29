import React from 'react';
import { shallow, mount } from 'enzyme'
import { TodoApp } from '../../../componets/08-useReducer/TodoApp';

import {demoTodos} from '../../fixtures/demoTodos'
import { act } from '@testing-library/react';


describe('Pruebas en TodoApp', () => {
    
    const wrapper = shallow(<TodoApp/>)

    Storage.prototype.setItem = jest.fn(()=>{})

    test('Debe mostrar correctamente el componente', () => { 
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe agregar un todo', () => {  

        const wrapper = mount( <TodoApp />)

        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] )
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] )

        })
        expect(wrapper.find('small').text().trim()).toBe('(2)')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })

    test('Debe eliminar un Todo', () => { 
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] )
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id )
        expect(wrapper.find('small').text().trim()).toBe('(0)')

    })

    
})