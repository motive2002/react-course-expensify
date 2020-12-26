import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


const now = moment()
console.log(now.format('MMMM Do, YYYY'))


//using a class object here to maintain local state. We're still getting and manimpulating
//props, but the dispatch is still in the AddExpense and EditExpense pages, passed back
//from the onSumbmit() prop.
export default class ExpenseForm extends React.Component {

    //if we're getting props from somewhere else and modifying them, gotta have
    //the constructor and super(props)
    constructor(props) {
        super(props)

        this.state = {

            //a shitload of ternary operators based on adding or editing an expense
            //if the object property exists (we're editing) assign it. If it doesn't
            //exist, provide a default value. For the most part make it blank
            //or in case of the date, just grab the current date.
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,

            //provide an error prop, and default it to an empty string
            error: ''
        }
    }

    onDescriptionChange = (e) => {

        const description = e.target.value
        this.setState(() => ({description}))

    }

    onNoteChange = (e) => {

        const note = e.target.value
        this.setState(() => ({note}))

    }

    onAmountChange = (e) => {
        const amount = e.target.value

        //if amount is empty (user hit backspace enough times or delete OR there's a match to the regular
        //expression..)
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //regular expression (regex101.com) looking to force format to one decimal point and two places past it.
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {


        //form submits do a total page refresh, unless we call preventDefault
        e.preventDefault()

        //if there's no description or amount, change the error prop so we can alert the user
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'please provide description and amount'}))
        }else{
            console.log('submitted')

            //reset the error prop
            this.setState(() => ({error: ''}))

            //onSubmit is from the AddExpense or EditExpense component. It fires a dispatch after the call
            //then push() to the dashboard page.
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) *100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {

        return (
            <div>

            {/*if the error is not an empty string, render the error in a <p> tag */}
            {this.state.error !== '' && <p>{this.state.error}</p>}

            {/*give the form the onSubmit prop */}
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
            <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>

            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
            />

            <textarea placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
            <button>Add Expense</button>
            </form>
            </div>

        )
    }
}