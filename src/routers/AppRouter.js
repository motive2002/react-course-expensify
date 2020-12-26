import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFound from '../components/NotFound'

const AppRouter = () => (

    //the main router component. To route multiple pages a div is required
    <BrowserRouter>
    <div>

        {/*Header has a bunch of NavLinks */}
        <Header />


        {/*Switch will run through all of the paths and STOP when it has a match.
        If it doesn't match any of the paths, it will match with NotFound for our 404 */}
        <Switch>

            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />


            {/*When a Route has no path it is assumed as ALWAYS a match.
            When Switch fails to match any of the paths above, it will match here. */}
            <Route component={NotFound} />

        </Switch>
</div>
    </BrowserRouter>
)

export default AppRouter
