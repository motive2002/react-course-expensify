//export stateless functional component
//render description
//render amount
//render createdAt
import moment from 'moment'
import numeral from 'numeral'

import React from 'react'

import {Link} from 'react-router-dom'


const ExpenseListItem = ({description, amount, createdAt, id}) => (

    <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>
    {numeral(amount / 100).format('$0,0.00')}</p>
    <p>
    {moment(createdAt).format('MMM Do, YYYY')}</p>

    </div>

)

export default ExpenseListItem
