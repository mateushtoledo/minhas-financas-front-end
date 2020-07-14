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

function FinancialRecordRegister(props) {

    const [year, setYear] = useState((new Date()).getFullYear());
    const [month, setMonth] = useState((new Date()).getMonth() + 1);
    const [type, setType] = useState("INCOME");
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");

    const register = () => {
        let newRecord = {
            year: year,
            month: month,
            type: type,
            value: value,
            description: description
        };

        const headers = { headers: props.details.headers };
        Api.post("/financial-records", newRecord, headers)
        .then(response => {
            financialRecordRegistered();
        }).catch(error => {
            validateErrorResponse(error.response);
        });
    };

    const cleanForm = () => {
        let date = new Date();

        setType("INCOME");
        setYear(date.getFullYear());
        setMonth(date.getMonth() + 1);
        setValue(0);
        setDescription("");
    };

    const financialRecordRegistered = () => {
        cleanForm();

        showSuccessMessage("O registro foi adicionado!");
    };

    const validateErrorResponse = (apiResponse) => {
        if (apiResponse.status === 401) {
            props.history.push("/login");
        } else {
            apiResponse.data.errors.forEach(error => {
                showWarningMessage(error.message);
            });
        }
    };

    // Run after component loading
    useEffect(() => {
        if (!props.authenticated) {
            props.history.push("/login");
        }
    }, [props.authenticated]);

    return (
        <>
            <UserNavbar />
            <h2>Adicionar registro financeiro</h2>
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

                actionButtonLabel={"Adicionar"}
                submitAction={register}
            />
        </>
    )
}

const mapStateToProps = store => ({
    authenticated: store.authenticated,
    details: store.details
});

const FinancialRecordRegisterConnected = connect(mapStateToProps)(FinancialRecordRegister);
export default withRouter(FinancialRecordRegisterConnected);