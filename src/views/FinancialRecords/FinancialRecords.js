import React, { useState, useEffect } from 'react';
import UserNavbar from '../../components/UserNavbar';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { showSuccessMessage, showWarningMessage } from '../../components/Messages'
import ConfirmationDialog from '../../components/ConfirmationDialog'

import RecordsFilter from './RecordsFilter'
import RecordsTable from './RecordsTable'
import RecordsPagination from './RecordsPagination'
import FloatingAddButton from './FloatingAddButton'

import Api from '../../core/Api'

const DEFAULT_PAGINATION = {
    pageIndex: 1,
    pageSize: 10,
    pageItems: 0,
    totalItems: 0,
    totalPages: 0
};

const APPROVATION_CONFIRMATION_MODAL_ID = "confirm-register-approvation";
const CANCELLATION_CONFIRMATION_MODAL_ID = "confirm-register-cancellation";
const EXCLUSION_CONFIRMATION_MODAL_ID = "confirm-register-deletion";

function FinancialRecords(props) {
    const [financialRecords, setFinancialRecords] = useState([]);
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [type, setType] = useState("");
    const [recordId, setRecordId] = useState("");
    const [pagination, setPagination] = useState(DEFAULT_PAGINATION);

    const applyFilters = () => {
        // Reset pagination
        let pg = pagination;
        pg.pageIndex = DEFAULT_PAGINATION.pageIndex;
        pg.pageSize = DEFAULT_PAGINATION.pageSize;
        setPagination(pg);

        loadFinancialRegisters();
    };

    const refreshPageAfterAction = () => {
        setYear("");
        setMonth("");
        setType("");
        setRecordId("");
        applyFilters();
    };

    const loadFinancialRegisters = () => {
        const endpoint = `/financial-records?pageIndex=${pagination.pageIndex}&pageSize=${pagination.pageSize}`
            + `&year=${year}&month=${month}&type=${type}`;

        Api.get(endpoint, { headers: props.details.headers })
            .then(response => {
                renderData(response.data);
            }).catch(error => {
                validateUserLogin(error.response);
            });
    };

    // Run after component loading
    useEffect(() => {
        loadFinancialRegisters();
    }, []);

    const renderData = (page) => {
        setFinancialRecords(page.items);

        delete page.items;
        setPagination(page);
    };
    
    const changePage = (newIndex) => {
        let pgn = pagination;
        pgn.pageIndex = newIndex;

        setPagination(pgn);
        loadFinancialRegisters();
    };

    const validateUserLogin = (apiResponse) => {
        if (apiResponse.status === 401) {
            props.history.push("/login");
        } else {
            console.error(apiResponse);
        }
    };

    const approveRegister = () => {
        Api.patch(`/financial-records/${recordId}/status`,
        {status: "ACCEPTED"},
        { headers: props.details.headers }
    )
        .then(response => {
            showSuccessMessage("O registro foi aprovado!");
            refreshPageAfterAction();
        })
        .catch(error => {
            validateUserLogin(error.response);
            showErrorMessages(error.response);
        });
    };

    const cancelRegister = () => {
        Api.patch(`/financial-records/${recordId}/status`,
            {status: "CANCELLED"},
            { headers: props.details.headers }
        )
        .then(response => {
            showSuccessMessage("O registro foi bloqueado!");
            refreshPageAfterAction();
        })
        .catch(error => {
            validateUserLogin(error.response);
            showErrorMessages(error.response);
        });
    };

    const deleteRegister = () => {
        Api.delete(`/financial-records/${recordId}`,
            { headers: props.details.headers }
        )
        .then(response => {
            showSuccessMessage("O registro foi apagado!");
            refreshPageAfterAction();
        })
        .catch(error => {
            validateUserLogin(error.response);
            showErrorMessages(error.response);            
        });
    };

    const showErrorMessages = (apiResponse) => {
        for (let i=0 ; i<apiResponse.data.errors.length ; i++) {
            showWarningMessage(apiResponse.data.errors[i].message);
        }
    };

    return (
        <>
            <UserNavbar activeItem="financial-records" />
            <h2>Registros financeiros</h2>
            <hr />
            <RecordsFilter
                type={type}
                setType={setType}
                year={year}
                setYear={setYear}
                month={month}
                setMonth={setMonth}
                filter={applyFilters}
            />
            <RecordsTable
                records={financialRecords}
                setActionTarget={setRecordId}
                approvationModalId={APPROVATION_CONFIRMATION_MODAL_ID}
                cancellationModalId={CANCELLATION_CONFIRMATION_MODAL_ID}
                deletionModalId={EXCLUSION_CONFIRMATION_MODAL_ID}
            />
            <RecordsPagination
                pagination={pagination}
                changePage={changePage}
            />
            <FloatingAddButton />

            <ConfirmationDialog
                id={APPROVATION_CONFIRMATION_MODAL_ID}
                message="Você confirma a aprovação do registro financeiro?"
                modalAction={approveRegister}
            />
            <ConfirmationDialog
                id={CANCELLATION_CONFIRMATION_MODAL_ID}
                message="Você confirma o bloqueio do registro financeiro?"
                modalAction={cancelRegister}
            />
            <ConfirmationDialog
                id={EXCLUSION_CONFIRMATION_MODAL_ID}
                message="Você confirma a exclusão permanente do registro financeiro?"
                modalAction={deleteRegister}
            />
        </>
    )
}

const mapStateToProps = store => ({ details: store.details });

const FinancialRecordsConnected = connect(mapStateToProps)(FinancialRecords);
export default withRouter(FinancialRecordsConnected);