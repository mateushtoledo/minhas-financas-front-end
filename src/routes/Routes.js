import React from 'react'

import AuthenticatedRoute from './AuthenticatedRoute'
import GuestRoute from './GuestRoute'
import Login from '../views/Login'
import UserRegistration from '../views/UserRegistration'
import Dashboard from '../views/Dashboard'
import FinancialRecords from '../views/FinancialRecords'
import FinancialRecordRegister from '../views/FinancialRecordRegister'
import FinancialRecordEdit from '../views/FinancialRecordEdit'

// Destructuring: extracting some properties of 'react-router-dom' object
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/cadastro" component={UserRegistration} />
                <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
                <AuthenticatedRoute exact path="/registros-financeiros" component={FinancialRecords} />
                <AuthenticatedRoute exact path="/registros-financeiros/cadastro" component={FinancialRecordRegister} />
                <AuthenticatedRoute exact path="/registros-financeiros/editar/:id" component={FinancialRecordEdit} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;