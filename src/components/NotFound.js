import React from 'react'
import {Link} from 'react-router-dom'

//Link to dashboard page from the 404 using react-router
//for client side navigation

const NotFound = () => (
    <div>404 Page Not Found <Link to="/">Go Home</Link></div>
)

export default NotFound