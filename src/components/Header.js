import React from 'react'
import {NavLink} from 'react-router-dom'
//NavLink is an extended version of Link with extra props


//activeClassName is a prop for Navlink and "is-active" is a CSS style
//that will change the font to bold when the link is active.

const Header = () => (

    <header>
    <h1>Expensify</h1>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>

    {/*Once again using exact={true} to Match with forward slash only, and not
    forward slash plus everything in front of it */}
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    </header>
)

export default Header