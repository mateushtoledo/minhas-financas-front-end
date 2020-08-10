import React from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

function AuthenticatedRoute( { component: Component, ...props } ) {
    return (
        <Route {...props} render={ (cmpProps) => {
            if (props.authenticated) {
                return (
                    <Component {...cmpProps} />
                )
            } else {
                return (
                    // Redirect saving navigation history
                    <Redirect to={
                        {
                            pathname: "/login",
                            state: {
                                from: cmpProps.location
                            }
                        }
                    } />
                )
            }
        }} />
    )
}

const mapStateToProps = store => ({
    authenticated: store.authenticated
});

const AuthenticatedRouteConnected = connect(mapStateToProps)(AuthenticatedRoute);
export default AuthenticatedRouteConnected;