import React from 'react'

import FormGroup from '../../../components/FormGroup'

import { Search as SearchIcon } from '@material-ui/icons'

export default function RecordsFilter(props) {
    return (
        <div className="row">
            <div className="col-sm-3">
                <FormGroup label="Tipo:" labelFor="type-filter">
                    <select
                        id="type-filter"
                        className="custom-select"
                        value={props.type}
                        onChange={ev => props.setType(ev.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="INCOME">Receitas</option>
                        <option value="EXPENSE">Despesas</option>
                    </select>
                </FormGroup>
            </div>
            <div className="col-sm-3">
                <FormGroup label="Ano:" labelFor="year-filter">
                    <input
                        id="year-filter"
                        type="number"
                        className="form-control"
                        placeholder="Ano"
                        value={props.year}
                        onChange={ev => props.setYear(ev.target.value)}
                    />
                </FormGroup>
            </div>
            <div className="col-sm-3">
                <FormGroup label="Mês:" labelFor="month-filter">
                    <input
                        id="month-filter"
                        type="number"
                        className="form-control"
                        placeholder="Mês"
                        value={props.month}
                        onChange={ev => props.setMonth(ev.target.value)}
                        min={1}
                        max={12}
                    />
                </FormGroup>
            </div>
            <div className="col-sm-3">
                <FormGroup label="&nbsp;" labelFor="search-btn">
                    <button
                        id="search-btn"
                        type="button"
                        className="btn btn-primary form-control"
                        onClick={ev => props.filter()}
                    >
                        <SearchIcon />&nbsp;&nbsp;Filtrar
                    </button>
                </FormGroup>
            </div>
        </div>
    )
};