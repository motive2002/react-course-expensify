import EditExpensePage from "../../components/EditExpensePage";
import {addExpense, editExpense, EditExpense, removeExpense} from '../../actions/expenses'

test('should test remove expense', () => {

    const myAction = removeExpense( {id: '123abc'} )

    expect(myAction).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })

})

test('Should test editExpense', () => {

    const myAction = editExpense('555', {note: 'Some Note'})

    expect(myAction).toEqual(
        {
            id: '555',
            type: 'EDIT_EXPENSE',
            updates: {
                note: 'Some Note'
            }
        }
    )
})

test('Should setup addExpense action with provided values', () => {

    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month\'s rent'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        
        expense: {
        ...expenseData,
        id: expect.any(String)}
        
    })

})

test('Should set up add expense with default values', () => {

    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
    
})