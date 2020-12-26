import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('Should set up default filter values', () => {

    const state = filterReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortBy to amount', () => {

    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe('amount')

})

test('Should sort by date', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = {type: 'SORT_BY_DATE'}
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')

})

//should set text filter
//should set startDate
//should set endDate

test('Should set text filter', () => {

    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Larry'})
    expect(state.text).toBe('Larry')

})

test('Should set startDate', () => {

    const start = moment().startOf('month')

    const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate: start})
    expect(state.startDate).toEqual(start)

})

test('Should set endDate', () => {

    const end = moment().endOf('month')

    const state = filterReducer(undefined, {type: 'SET_START_DATE', endDate: end})
    expect(state.endDate).toEqual(end)

})