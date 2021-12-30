import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login'
import LandingPageGuest from './components/landing-page-guest.component'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPageGuest} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
