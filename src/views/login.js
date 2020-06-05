import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import CenteredDiv from '../components/centered-div'
import AccountIcon from '../img/account.png'
import GuestNavbar from '../components/guest-navbar';

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    login = () => {
        axios.post('http://localhost:8081/auth/authentications', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            this.saveAuthenticationData(response);
        }).catch(error => {
            this.showErrorMessage(error.response.data);
        });
    };

    saveAuthenticationData = (data) => {
        this.props.history.push("/dashboard");
    };

    showErrorMessage = (data) => {
        this.setState({errorMessage: data.errors[0].message});
        //this.setState({errorMessage: "Dados de acesso inválidos. Por favor, verifique suas credenciais, e tente novamente!"});
    };

    render() {
        return (
            <>
            <GuestNavbar />
            <div className="row">
                <div className="col-sm-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card>
                            <CenteredDiv>
                                <img src={AccountIcon} alt="Acesse sua conta" className="max-width-170" />
                                <h3>Acesse sua conta</h3>
                            </CenteredDiv>
                            <div className="text-center">
                                <span className="text-danger font-weight-bold">{this.state.errorMessage}</span>
                            </div>
                            <div className="row  mb-lg-3">
                                <div className="col-sm-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" labelFor="email">
                                                <input type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Informe seu e-mail"
                                                    value={this.state.email}
                                                    onChange={(ev) => this.setState({ email: ev.target.value })}
                                                />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" labelFor="password">
                                                <input type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Informe sua senha"
                                                    value={this.state.password}
                                                    onChange={(ev) => this.setState({ password: ev.target.value })}
                                                />
                                            </FormGroup>
                                            <button type="button" className="btn btn-primary form-control" onClick={this.login}>Entrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <CenteredDiv>
                            <p>Não possui uma conta no sistema? <a href="#/cadastro" className="text-primary">Cadastre-se</a></p>
                        </CenteredDiv>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(Login);