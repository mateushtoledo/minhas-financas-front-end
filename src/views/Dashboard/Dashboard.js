import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Api from '../../core/Api'
import UserNavbar from '../../components/UserNavbar';

function Dashboard(props) {
    const [incomes, setIncomes] = useState();
    const [expenses, setExpenses] = useState();
    const [balance, setBalance] = useState();

    // Run after component loading
    useEffect(() => {
        const headers = { headers: props.details.headers };
        Api.get("/financial-records/extracts", headers)
            .then(response => {
                setCardValues(response.data);
            }).catch(error => {
                validateUserLogin(error.response);
            });
    }, []);

    const maskValue = (value) => {
        let prettyNumber = value.toFixed(2);
        return ("R$ " + prettyNumber).replace(".", ",")
    };

    const setCardValues = (values) => {
        setIncomes(maskValue(values.incomes));
        setExpenses(maskValue(values.expenses));
        setBalance(maskValue(values.balance));
    };

    const validateUserLogin = (apiResponse) => {
        if (apiResponse.status === 401) {
            props.history.push("/login");
        }
    };

    return (
        <>
            <UserNavbar activeItem="dashboard" />
            <h2>Dashboard</h2>
            <hr />
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="card border-success mb-3">
                        <div className="card-header bg-success text-light">
                            <h4 className="card-title">Suas receitas</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text-big text-success">
                                {incomes}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-danger mb-3">
                        <div className="card-header bg-danger text-light">
                            <h4 className="card-title">Suas despesas</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text-big text-danger">
                                {expenses}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-dark mb-3">
                        <div className="card-header bg-light">
                            <h4 className="card-title">Seu resultado</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text-big">
                                {balance}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = store => ({
    details: store.details
});

const DashboardConnected = connect(mapStateToProps)(Dashboard);
export default withRouter(DashboardConnected);