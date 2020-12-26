import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {removeExpense, editExpense} from '../actions/expenses'


const EditExpensePage = (props) => {

    // console.log(props)

    return (
        <div>

        {/* render ExpenseForm component. Set up a prop for onSubmit. If the user
        clicks submit, dispatch the action for editExpense, which will update
        the current expense based on id... then go back to the dashboard via push('/') */}
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {

            props.dispatch(editExpense(props.expense.id, expense))

            //props.history.push() comes from React-router props
            props.history.push('/')
            console.log('updated' ,expense)
        }}
        />

        {/*On the editExpense version of the ExpenseForm we're adding a button to REMOVE the
        expense based on the id */}
        <button onClick={() => {
            props.dispatch(removeExpense({id: props.expense.id}))
            props.history.push('/')
        }
        }>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) =>{

    return {

        //props.match.params.id is coming from React-Router (course 81 - query srings and URL parameters)
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)

    }
}

export default connect(mapStateToProps)(EditExpensePage)