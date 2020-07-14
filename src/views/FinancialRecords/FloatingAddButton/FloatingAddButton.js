import React from 'react'

import './FloatingAddButton.css'

import { Add as AddIcon } from '@material-ui/icons'

export default function FloatingAddButton(props) {
    return (
        <a className="btn btn-lg btn-primary" title="Adicionar registro financeiro" href="#/registros-financeiros/cadastro" id="floating-add-button">
            <AddIcon className="text-light" />
        </a>
    )
};