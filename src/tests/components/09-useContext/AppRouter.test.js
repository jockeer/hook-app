import React from 'react';

import {mount} from 'enzyme'
import { AppRouter } from '../../../componets/09-useContext/AppRouter';
import { UserContext } from '../../../componets/09-useContext/UserContext';


describe('Pruebas en AppRouter', () => { 

    const user = {
        id:123,
        name:'Daniel'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter /> 

        </UserContext.Provider>
    )

    test('Debe mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot()
    })
})