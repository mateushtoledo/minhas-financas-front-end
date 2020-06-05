import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import GuestNavbar from '../components/guest-navbar';
import FormGroup from '../components/form-group'
import CenteredDiv from '../components/centered-div'
import AccountIcon from '../img/account.png'

import '../css/login.css'

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        errorMessage: null,
        auth: false
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
        this.setState({ errorMessage: data.errors[0].message });
    };

    componentDidMount = () => {
        console.info("Tela de login criada");
    };

    render() {
        return (
            <>
                <GuestNavbar activeItem="login" />
                <div className="card card-container">
                    <img id="profile-img" alt="Acessar conta" className="profile-img-card" src={AccountIcon} />
                    <CenteredDiv>
                        <h3 className="form-title">Acesse sua conta</h3>
                    </CenteredDiv>
                    <CenteredDiv>
                        <span className="text-danger font-weight-bold">{this.state.errorMessage}</span>
                    </CenteredDiv>
                    <form className="form-signin">
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
                    </form>
                </div>
                <CenteredDiv>
                    <p>Não possui uma conta no sistema? <a href="#/cadastro" className="text-primary">Cadastre-se</a></p>
                </CenteredDiv>
            </>
        )
    }
}

export default withRouter(Login);