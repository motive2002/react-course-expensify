import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import getVisibleExpenses from './selectors/expenses'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'


import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// store.subscribe(() => {

//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
//     console.log(visibleExpenses)

// })

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, createdAt: 9000}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 300, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 500}))

// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

const state = store.getState()
getVisibleExpenses(state.expenses, state.filter)

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))






