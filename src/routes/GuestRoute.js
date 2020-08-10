import React from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

function GuestRoute( { component: Component, ...props } ) {
    return (
        <Route {...props} render={ (cmpProps) => {
            if (!props.authenticated) {
                return (
                    <Component {...cmpProps} />
                )
            } else {
                return (
                    // Redirect saving navigation history
                    <Redirect to={
                        {
                            pathname: "/dashboard",
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

const GuestRouteConnected = connect(mapStateToProps)(GuestRoute);
export default GuestRouteConnected;