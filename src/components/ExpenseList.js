import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

//Despite the extra function calls used, this is a
//typical react-redux component with the basic ingredients necessary -

//This is the simple Stateless Functional Component. It gets props
//ultimately from the store passed to it. In this paticular case it is returning
//another component, which is just a visual display component <ExpenseListItem />
//that is not tied to the store.
export const ExpenseList = (props) => (
    <div>
    

    {/* for each item in the filtered expenses, return a component
    with the props set up using an id and SPREAD the rest of the expenses object*/}

    {props.expenses.length === 0 ? <p>No expenses</p> : props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id}{...expense}/>
    })}
    
    </div>
)

//Ah, mapStateToProps. The state comes from the store in the connect() method.
//Here we are using a selector to filter things (selectExpenses)
//but ultimately we are going to return props for the ExpenseList to use
const mapStateToProps = (state) => {

    return {
        expenses: selectExpenses(state.expenses, state.filter)
    } 
}


//connect. This is the higher order component. This does the props
//and returns the new ExpenseList component.
export default connect(mapStateToProps)(ExpenseList)

