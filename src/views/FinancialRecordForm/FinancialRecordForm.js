import React from 'react'

import FormGroup from '../../components/FormGroup'

function FinancialRecordForm(props) {

    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <FormGroup label="Ano: *" labelFor="year">
                        <input type="number"
                            id="year"
                            className="form-control"
                            placeholder="Informe o ano de referência"
                            value={props.year}
                            onChange={(ev) => props.setYear(ev.target.value)}
                        />
                    </FormGroup>
                </div>
                <div className="col-sm-3">
                    <FormGroup label="Mês: *" labelFor="month">
                        <input type="number"
                            id="month"
                            className="form-control"
                            placeholder="Informe o mês de referência"
                            value={props.month}
                            onChange={(ev) => props.setMonth(ev.target.value)}
                        />
                    </FormGroup>
                </div>
                <div className="col-sm-3">
                    <FormGroup label="Tipo:" labelFor="type">
                        <select
                            id="type"
                            className="custom-select"
                            value={props.type}
                            onChange={ev => props.setType(ev.target.value)}
                        >
                            <option value="INCOME">Receita</option>
                            <option value="EXPENSE">Despesa</option>
                        </select>
                    </FormGroup>
                </div>
                <div className="col-sm-3">
                    <FormGroup label="Valor: *" labelFor="value">
                        <input type="number"
                            id="value"
                            className="form-control"
                            placeholder="Informe o valor do registro"
                            value={props.value}
                            onChange={(ev) => props.setValue(ev.target.value)}
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <FormGroup label="Descrição: *" labelFor="description">
                        <textarea
                            id="description"
                            rows={3}
                            className="form-control"
                            value={props.description}
                            onChange={ev => props.setDescription(ev.target.value)}
                            placeholder="Descreva o registro financeiro aqui"
                        >
                        </textarea>
                    </FormGroup>
                </div>
            </div>
            <div className="text-center form-group">
                <button
                    className="btn btn-lg btn-primary"
                    onClick={ev => props.submitAction()}
                >
                    {props.actionButtonLabel}
                </button>
                &nbsp;&nbsp;
                <a
                    className="btn btn-lg btn-danger"
                    href="#/registros-financeiros"
                >
                    Cancelar
                </a>
            </div>
        </>
    )
}

export default FinancialRecordForm;