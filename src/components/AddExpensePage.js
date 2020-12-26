import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'


const AddExpensePage = (props) => (
    <div>
    <h1>Add Expense</h1>

    {/*render expense form component. Set a prop for onSubmit. If the user clicks
    onSubmit, dispatch the addExpense action which will add a new expense and give
    it a unique ID..  then go back to the dashboard page with push('/') */}
    <ExpenseForm
    onSubmit={(expense) =>{
        props.dispatch(addExpense(expense))
        props.history.push('/')
    }}
    />
    </div>
)

export default connect()(AddExpensePage)