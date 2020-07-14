import React from 'react'

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
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={UserRegistration} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/registros-financeiros" component={FinancialRecords} />
                <Route exact path="/registros-financeiros/cadastro" component={FinancialRecordRegister} />
                <Route exact path="/registros-financeiros/editar/:id" component={FinancialRecordEdit} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;