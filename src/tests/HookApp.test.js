import React from 'react';

import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import HookApp from '../HookApp'

describe('Probando componente <HookApp />', () => { 

    test('Debe mostrarse el componente correctamente', () => { 

        const wrapper = shallow(<HookApp />)
        expect( wrapper ).toMatchSnapshot();

    })

})