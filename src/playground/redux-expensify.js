import {createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'


//add expense - pass to it a destructured object, or an empty object as default. Implicitly return an object
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({

    //return object (type is required)
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(), //unique id from uuid library
        description,
        note, 
        amount,
        createdAt
    }
})

//Further ACTIONS
const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE', 
    id
})

const editExpense = ({id}, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


//expenses REDUCER
//default state is an empty array
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        //using array SPREAD return all of the state array plus a new expense appended onto the array
        case 'ADD_EXPENSE': return [...state, action.expense]   

        //return a new array with id filtered out of it
        //id in the arguments is destructured from the expenses object
        //I think it could have been done with (expenses) and then expenses.id !== action.id, but we're being fancy
        case 'REMOVE_EXPENSE':return state.filter(({id}) => id !== action.id)  
        
        case 'EDIT_EXPENSE':

            return state.map((expense) => {
                if (expense.id === action.id) {  //return a new object from the array match based on id
                    return {...expense, ...action.updates}
                }else{
                    return expense
                 }
            })

        default: return state
    }
}


//Default properties for filter reducer
const expenseFilterDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//The filter REDUCER
const filterReducer = (state = expenseFilterDefault, action) => {

    switch (action.type) {

        //Use the object SPREAD operator to return a new object plus altered properties.
        //The goal of reducers is to return new objects, NOT mutate the current state object.
        //We are simply utilizing the state object to get info from it.
        case 'SET_TEXT_FILTER': return {...state, text: action.text}
        case 'SORT_BY_AMOUNT': return {...state, sortBy: 'amount'}
        case 'SORT_BY_DATE': return {...state, sortBy: 'date'}
        case 'SET_START_DATE': return {...state, startDate: action.startDate}
        case 'SET_END_DATE': return {...state, endDate: action.endDate}
        default: return state
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    //Don't be frightened. This is just a bunch of logic used to sort how the visible
    //expenses are displayed.
    return expenses.filter((expense) => {

        //validate data
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        //return filtered array when all data is a match
        return startDateMatch && endDateMatch && textMatch})

        //once the filtered array is figured out, toss a sort method onto that as well.
        //it's basically 2 methods chained together on the same array.
    
        .sort((a, b) => {

        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }

    })


}


const store = createStore(combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
}))

store.subscribe(() => {

    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses)

})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 800, createdAt: -1000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000}))

// store.dispatch(removeExpense(expenseOne.expense))
// store.dispatch(editExpense(expenseTwo.expense, {amount: 1200}))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())  //a call with no arguments results in default '' text
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())



// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))





//JUST A TEMPLATE FOR OUR OBJECT - DOES NOT DO ANYTHING
//This just simply defines what we want for our object names and properties.
//Could have just written it down. This doesn't even need to exist in the file, but
//it's handy to have it here.
const demoState = {
    expenses: [{
        id: 'kldflksdf',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }

}

