//export stateless functional component
//render description
//render amount
//render createdAt

import React from 'react'

import {Link} from 'react-router-dom'


const ExpenseListItem = ({description, amount, createdAt, id}) => (

    <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>{amount}</p>
    <p>{createdAt}</p>

    </div>

)

export default ExpenseListItem
