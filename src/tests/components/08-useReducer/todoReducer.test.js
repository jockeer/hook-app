import '@testing-library/jest-dom'
import { todoReducer } from '../../../componets/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'


describe('Prueba en todoReduces', () => { 

    test('debe retornar el estado por defecto', () => { 
        const state = todoReducer(demoTodos,{})
        expect(state).toEqual(demoTodos)
    })
    
    test('debe agregar un todo', () => {
        const newTodo = {
            type:'add',
            payload:{
                id:3,
                desc:'Aprender c++',
                done:false
            }
        }
        const state = todoReducer(demoTodos, newTodo)
        expect(state.length).toBe(3)
        expect(state).toEqual([...demoTodos, newTodo.payload]) //!mas especifico
        
    })

    test('debe eliminar un todo', () => {
        const newTodo = {
            type:'delete',
            payload:1
        }
        const state = todoReducer(demoTodos, newTodo)
        expect(state.length).toBe(1)
        expect(state).toEqual([demoTodos[1]])
        
        
    })

    test('debe cambiar el done', () => {
        const newTodo = {
            type:'toggle',
            payload:1
        }
        const state = todoReducer(demoTodos, newTodo)
        expect(state[0].done).toBe(true)
        // expect(state).toEqual([...demoTodos, newTodo.payload]) //!mas especifico
        
    })

})