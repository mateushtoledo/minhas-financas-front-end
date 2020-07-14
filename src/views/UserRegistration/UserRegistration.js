import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Api from '../../core/Api'

import {
    showSuccessMessage,
    showWarningMessage
} from '../../components/Messages'
import GuestNavbar from '../../components/GuestNavbar'
import FormGroup from '../../components/FormGroup'
import CenteredDiv from '../../components/CenteredDiv'

import '../../assets/css/login.css'
import AccountIcon from '../../assets/img/account.png'

function UserRegistration(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const register = () => {
        if (password !== passwordConfirmation) {
            showWarningMessage("As senhas informadas não conferem!");
            return;
        } else if (password.length === 0) {
            showWarningMessage("Por favor, informe uma senha para sua conta!");
            return;
        }

        Api.post('/users', {
            name: name,
            email: email,
            password: password
        }).then(response => {
            userRegistered();
        }).catch(error => {
            showErrorMessages(error.response.data);
        });
    };

    const userRegistered = () => {
        showSuccessMessage("Sua conta foi criada! Aguarde, você será redirecionado.");

        setTimeout(function () {
            props.history.push("/login");
        }, 2000);
    };

    const showErrorMessages = (data) => {
        data.errors.forEach(err => {
            showWarningMessage(err.message);
        });
    };

    return (
        <>
            <GuestNavbar activeItem="register" />
            <div className="card card-container">
                <img id="profile-img" alt="Criar conta" className="profile-img-card" src={AccountIcon} />
                <CenteredDiv>
                    <h3 className="form-title">Crie sua conta</h3>
                </CenteredDiv>
                <FormGroup label="Nome: *" labelFor="name">
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="Informe seu nome"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                </FormGroup>
                <FormGroup label="Email: *" labelFor="email">
                    <input type="email"
                        className="form-control"
                        id="email"
                        placeholder="Informe seu melhor e-mail"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </FormGroup>
                <FormGroup label="Senha: *" labelFor="password">
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Crie sua senha de acesso"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </FormGroup>
                <FormGroup label="Confirmação de senha: *" labelFor="password-confirmation">
                    <input type="password"
                        className="form-control"
                        id="password-confirmation"
                        placeholder="Confirme sua senha de acesso"
                        value={passwordConfirmation}
                        onChange={(ev) => setPasswordConfirmation(ev.target.value)}
                    />
                </FormGroup>
                <button type="button" className="btn btn-primary form-control" onClick={register}>Criar conta</button>
            </div>
            <CenteredDiv>
                <p>Já possui uma conta no sistema? <a href="#/login" className="text-primary">Acesse sua conta</a></p>
            </CenteredDiv>
        </>
    )
}

export default withRouter(UserRegistration);