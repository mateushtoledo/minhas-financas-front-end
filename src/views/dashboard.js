import React from 'react';
import UserNavbar from '../components/user-navbar';


class Dashboard extends React.Component {
    state = {
        incomes: "R$ 4000.00",
        expenses: "R$ 2350.00",
        balance: "R$ 1650.00"
    };

    render() {
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
                                    {this.state.incomes}
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
                                    {this.state.expenses}
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
                                    {this.state.balance}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard;