import React from 'react'

function NavItem(props) {

    let cssClass = "nav-link";
    if (props.active) {
        cssClass += " active";
    }

    return (
        <li className="nav-item">
            <a className={cssClass} href={props.href}>
                {props.label}
            </a>
        </li>
    )
}

export default NavItem;