import React from 'react'
import { withRouter } from 'react-router-dom'

import '../css/login.css'

import GuestNavbar from '../components/guest-navbar'
import FormGroup from '../components/form-group'
import CenteredDiv from '../components/centered-div'
import AccountIcon from '../img/account.png'

class UserRegistration extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    register = () => {
        console.log(this.state);
    };

    render() {
        return (
            <>
                <GuestNavbar activeItem="register" />
                <div className="card card-container">
                    <img id="profile-img" alt="Criar conta" className="profile-img-card" src={AccountIcon} />
                    <CenteredDiv>
                        <h3 className="form-title">Crie sua conta</h3>
                    </CenteredDiv>
                    <CenteredDiv>
                        <span className="text-danger font-weight-bold">{this.state.errorMessage}</span>
                    </CenteredDiv>
                    <form className="form-signin">
                        <FormGroup label="Nome: *" labelFor="name">
                            <input type="text"
                                className="form-control"
                                id="name"
                                placeholder="Informe seu nome"
                                value={this.state.name}
                                onChange={(ev) => this.setState({ name: ev.target.value })}
                            />
                        </FormGroup>
                        <FormGroup label="Email: *" labelFor="email">
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="Informe seu melhor e-mail"
                                value={this.state.email}
                                onChange={(ev) => this.setState({ email: ev.target.value })}
                            />
                        </FormGroup>
                        <FormGroup label="Senha: *" labelFor="password">
                            <input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Crie sua senha de acesso"
                                value={this.state.password}
                                onChange={(ev) => this.setState({ password: ev.target.value })}
                            />
                        </FormGroup>
                        <FormGroup label="Confirmação de senha: *" labelFor="password-confirmation">
                            <input type="password"
                                className="form-control"
                                id="password-confirmation"
                                placeholder="Confirme sua senha de acesso"
                                value={this.state.passwordConfirmation}
                                onChange={(ev) => this.setState({ passwordConfirmation: ev.target.value })}
                            />
                        </FormGroup>
                        <button type="button" className="btn btn-primary form-control" onClick={this.login}>Entrar</button>
                    </form>
                </div>
                <CenteredDiv>
                    <p>Já possui uma conta no sistema? <a href="#/login" className="text-primary">Acesse sua conta</a></p>
                </CenteredDiv>
            </>
        )
    }
}

export default withRouter(UserRegistration);