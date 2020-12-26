import {createStore} from 'redux'


//ACTION GENERATORS

//lucy, got some esplainin to do here. This function takes a single object as an argument, or it defaults
//to an epmty object if no object is passed. MEANWHILE the object argument is being destructured in the
//parameter list to grab just the incrementBy property AND setting it to a default value.
//On top of this, since we're returning an object property with the SAME NAME as the argument, we're
//streamlining incrementBy: incrementBy to just one statement in the return.
//ALSO the return object is returned implicitly, so that shorthand is used as well.
const incrementCount = ({incrementBy = 1} = {}) => ({
    
    type: 'INCREMENT',
    incrementBy
    
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
})

//REDUCER
const countReducer = ((state = {count: 0}, action) => {

    switch (action.type) {

        case 'SET': return {count: action.count}
        case 'INCREMENT': return {count: state.count + action.incrementBy}
        case 'DECREMENT': return {count: state.count - action.decrementBy}
        case 'RESET': return {count: 0}

        default: return state
    }
})

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//Set an initial count value
store.dispatch(setCount({count: 100}))

//dispatch increment count but pass no objects. will default to one
store.dispatch(incrementCount())

//dispatch increment count but pass an object with the incrementBy prop set to 5, overriding the default.
store.dispatch(incrementCount({incrementBy: 5}))


store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy :10}))


store.dispatch(resetCount())




