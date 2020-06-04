import React from 'react'

import Login from '../views/login'
import UserRegistration from '../views/user-registration'

// Destructuring: extracting some properties of 'react-router-dom' object
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={UserRegistration} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;