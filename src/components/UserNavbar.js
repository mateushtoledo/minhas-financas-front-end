import React from 'react'
import { withRouter } from 'react-router-dom'
import NavItem from './NavItem'
import { connect } from 'react-redux'

import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function UserNavbar(props) {
    const logout = () => {
        props.dispatch({
            type: "LOGOUT"
        });
    };

    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-primary bg-primary text-light">
            <div className="container">
                <a href="#/dashboard" className="navbar-brand">
                    Minhas Finanças
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <MenuIcon />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavItem href="#/dashboard" label="Dashboard" active={props.activeItem === "dashboard"} />
                        <NavItem href="#/registros-financeiros" label="Registros financeiros" active={props.activeItem === "financial-records"} />
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="text-light text-uppercase">
                                <small className="font-weight-bold">{props.userName}</small>&nbsp;&nbsp;
                                <button className="btn btn-sm btn-outline-primary" title="Sair" onClick={ev => logout()}>
                                    <ExitToAppIcon className="text-light" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    authenticated: store.authenticated,
    userName: store.user.name
});

const UserNavbarConnected = connect(mapStateToProps)(UserNavbar);
export default withRouter(UserNavbarConnected);