
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        case 'ADD_EXPENSE': return [...state, action.expense]   //return a new array with spread (all contents of previous array) plus a new expense added on
        case 'REMOVE_EXPENSE': return state.filter(({id}) => id !== action.id)   //return a new array with everything BUT the id match
        
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


