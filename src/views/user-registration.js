import React from 'react'
import {withRouter} from 'react-router-dom'

import Card from '../components/card'
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
                <GuestNavbar />
                <Card>
                    <CenteredDiv>
                        <img src={AccountIcon} alt="Crie sua conta" className="max-width-170" style={{ maxWidth: "170px" }} />
                        <h3>Crie sua conta</h3>
                    </CenteredDiv>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bs-component">
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormGroup label="Nome: *" labelFor="name">
                                            <input type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Informe seu nome"
                                                onChange={(ev) => this.setState({ name: ev.target.value })}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-6">
                                        <FormGroup label="E-mail: *" labelFor="email">
                                            <input type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Informe seu e-mail"
                                                onChange={(ev) => this.setState({ email: ev.target.value })}
                                            />
                                            <small id="emailHelp" className="form-text text-muted">Não divulgamos o seu email.</small>
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-6">
                                        <FormGroup label="Senha: *" labelFor="password">
                                            <input type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                placeholder="Informe sua senha"
                                                onChange={(ev) => this.setState({ password: ev.target.value })}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-6">
                                        <FormGroup label="Confirmação da senha: *" labelFor="password-confirmation">
                                            <input type="password"
                                                className="form-control"
                                                id="password-confirmation"
                                                name="password-confirmation"
                                                placeholder="Informe sua senha novamente"
                                                onChange={(ev) => this.setState({ passwordConfirmation: ev.target.value })}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <button type="button" className="btn btn-primary form-control" onClick={this.register}>Salvar</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <a type="button" href="#/login" className="btn btn-danger form-control">Cancelar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <CenteredDiv>
                    <p>Já possui uma conta no sistema? <a href="#/login" className="text-primary">Acesse sua conta</a></p>
                </CenteredDiv>
            </>
        )
    }
}

export default withRouter(UserRegistration);