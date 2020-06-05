import React from 'react'
import {withRouter} from 'react-router-dom'
import NavItem from './nav-item'


function UserNavbar(props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-primary bg-primary">
            <div className="container">
                <a href="#/dashboard" className="navbar-brand">
                    Minhas Finanças
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavItem href="#/dashboard" label="Dashboard" active={props.activeItem === "dashboard"} />
                        <NavItem href="#/registros-financeiros" label="Registros financeiros" active={props.activeItem === "financial-registers"} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(UserNavbar);