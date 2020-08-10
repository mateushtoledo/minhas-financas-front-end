import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { withCookies } from 'react-cookie';

import AuthenticatedRoute from './AuthenticatedRoute'
import GuestRoute from './GuestRoute'
import Login from '../views/Login'
import UserRegistration from '../views/UserRegistration'
import Dashboard from '../views/Dashboard'
import FinancialRecords from '../views/FinancialRecords'
import FinancialRecordRegister from '../views/FinancialRecordRegister'
import FinancialRecordEdit from '../views/FinancialRecordEdit'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <GuestRoute exact path="/login" render={() => <Login cookies={this.props.cookies} />} />
                <GuestRoute exact path="/cadastro" render={() => <UserRegistration cookies={this.props.cookies} />} />
                <AuthenticatedRoute exact path="/dashboard"render={() => <Dashboard cookies={this.props.cookies} />} />
                <AuthenticatedRoute exact path="/registros-financeiros" render={() => <FinancialRecords cookies={this.props.cookies} />} />
                <AuthenticatedRoute exact path="/registros-financeiros/cadastro" render={() => <FinancialRecordRegister cookies={this.props.cookies} />} />
                <AuthenticatedRoute exact path="/registros-financeiros/editar/:id" render={() => <FinancialRecordEdit cookies={this.props.cookies} />} />
            </Switch>
        </HashRouter>
    )
}

export default withCookies(Routes);