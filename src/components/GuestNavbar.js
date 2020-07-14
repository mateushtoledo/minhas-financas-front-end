import React from 'react'
import { withRouter } from 'react-router-dom'
import NavItem from './NavItem'

import MenuIcon from '@material-ui/icons/Menu';


function GuestNavbar(props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-primary bg-primary">
            <div className="container">
                <a href="#/login" className="navbar-brand">
                    Minhas Finanças
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <MenuIcon />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavItem href="#/cadastro" label="Criar conta" active={props.activeItem === "register"} />
                        <NavItem href="#/login" label="Login" active={props.activeItem === "login"} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(GuestNavbar);