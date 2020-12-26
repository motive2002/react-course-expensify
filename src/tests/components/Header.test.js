
import React from 'react'
import Header from '../../components/Header'
import {shallow} from 'enzyme'


test('should render header correctly', () => {

    const wrapper = shallow(<Header />)


    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe('Expensify')


})