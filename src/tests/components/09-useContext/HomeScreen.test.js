import React from 'react';

import { mount } from 'enzyme'
import { HomeScreen } from '../../../componets/09-useContext/HomeScreen';
import { UserContext } from '../../../componets/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => { 

    const user ={
        name:'Daniel',
        email:'dgorianz@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />

        </UserContext.Provider>
    )

    test('Debe mostrar el componente Correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot()
        
    })

})