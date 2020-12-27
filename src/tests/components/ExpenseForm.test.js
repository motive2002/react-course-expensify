import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses' //a testing array of expenses

test ('Should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()

})

test('Should render expense form with some data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {

    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()

    //use .simulate to produce a virtual form submission
    //pass an object for the preventDefault method with a dummy arrow functon
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    })

    //if 'error' is greater than zero, we have legit data for the form.
    //if it is zero, the user submitted data is invalid
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()

})

test('Should set description on input change', () => {
    
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find('input').at(0).simulate('change', {target: {value}})

    expect(wrapper.state('description')).toBe(value)

})