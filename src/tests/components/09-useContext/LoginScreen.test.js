import React from 'react';
import {mount} from 'enzyme'
import { LoginScreen } from '../../../componets/09-useContext/LoginScreen';
import { UserContext } from '../../../componets/09-useContext/UserContext';


describe('Pruebas en LoginScreen', () => { 

    const setUser = jest.fn()


    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen /> 

        </UserContext.Provider>
    ) 

    test('Debe mostrar el componente correctamente', () => { 

        expect(wrapper).toMatchSnapshot()

    })

    test('Debe ejecutar el setUser con el argumento esperado', () => {  

        wrapper.find('button').simulate('click')
        
        expect(setUser).toHaveBeenCalled()
        expect(setUser).toHaveBeenCalledWith({
            id:111,
            name:'Daniel Gorianz'
        })
        
    })

})