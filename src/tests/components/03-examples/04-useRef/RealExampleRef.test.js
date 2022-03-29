import '@testing-library/jest-dom'
import React from 'react';
import {shallow} from 'enzyme'
import RealExampleRef from '../../../../componets/04-useRef/RealExampleRef'


describe('Prueba RealExampleRef', () => {  

    const wrapper = shallow(<RealExampleRef />)

    test('Debe mostrar el componente correctamente', () => { 
    
        expect(wrapper).toMatchSnapshot()
        
    })

    test('Debe mostrar el componente <MultipleCustomHooks />', () => { 
        wrapper.find('button').simulate('click')
    
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
        
    })
    

})