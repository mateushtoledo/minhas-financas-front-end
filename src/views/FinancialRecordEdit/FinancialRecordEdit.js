import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Api from '../../core/Api'

import {
    showSuccessMessage,
    showWarningMessage
} from '../../components/Messages'

import UserNavbar from '../../components/UserNavbar'
import FinancialRecordForm from '../FinancialRecordForm'

function FinancialRecordEdit(props) {
    const [id, setId] = useState(0);
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [type, setType] = useState("INCOME");
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");

    const update = () => {
        let toUpdate = {
            year: year,
            month: month,
            type: type,
            value: value,
            description: description
        };

        const headers = { headers: props.details.headers };
        Api.put(`/financial-records/${id}`, toUpdate, headers)
            .then(response => {
                showSuccessMessage("O registro foi alterado!");
            }).catch(error => {
                validateErrorResponse(error.response);
            });
    };

    const validateErrorResponse = (apiResponse) => {
        if (apiResponse.status === 401) {
            props.history.push("/login");
        } else {
            apiResponse.data.errors.forEach(error => {
                showWarningMessage(error.message);
            });

            if (apiResponse.status === 404) {
                props.history.push("/registros-financeiros");
            }
        }
    };

    // Is equal to componentDidMount
    useEffect(function() {
        const recordId = props.match.params.id;
        setId(recordId);

        const headers = { headers: props.details.headers };
        Api.get(`/financial-records/${recordId}`, headers)
            .then(response => {
                setId(response.data.id);
                setMonth(response.data.month);
                setYear(response.data.year);
                setType(response.data.type);
                setValue(response.data.value);
                setDescription(response.data.description);
            }).catch(error => {
                console.error(error.response);
                validateErrorResponse(error.response);
            });
    }, [props.match.params.id]);

    return (
        <>
            <UserNavbar />
            <h2>Editar registro financeiro</h2>
            <hr />
            <FinancialRecordForm
                type={type}
                setType={setType}

                year={year}
                setYear={setYear}

                month={month}
                setMonth={setMonth}

                value={value}
                setValue={setValue}

                description={description}
                setDescription={setDescription}

                actionButtonLabel={"Alterar"}
                submitAction={update}
            />
        </>
    )
}

const mapStateToProps = store => ({ details: store.details });

const FinancialRecordEditConnected = connect(mapStateToProps)(FinancialRecordEdit);
export default withRouter(FinancialRecordEditConnected);