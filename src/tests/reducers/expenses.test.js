import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {

    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])

})

test('Should remove expense by ID', () => {

    const action = {type: 'REMOVE_EXPENSE', id: expenses[1].id}
    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])

})

test('Should add an expense', () => {

    const expense = {
        id: '209',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }

    const action = {type: 'ADD_EXPENSE', expense}

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])


})

//should edit expense
//should not edit expense if not found

test('should edit expense', () => {

    const action = {type: 'EDIT_EXPENSE', id: expenses[0].id}
    const state = expensesReducer(expenses, action)

    expect(state[0]).toEqual(expenses[0])

})