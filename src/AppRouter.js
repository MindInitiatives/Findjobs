import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login'
import LandingPageGuest from './components/landing-page-guest.component'
import LandingPageAdmin from './components/landing-page-admin.component'
import PublicRoute from './utils/publicRoute'
import PrivateRoute from './utils/privateRoute'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPageGuest} />
                    <PrivateRoute path="/admin" exact component={LandingPageAdmin} />
                    <PublicRoute path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
