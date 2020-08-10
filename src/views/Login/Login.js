import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Api from '../../core/Api'

import {
    showWarningMessage
} from '../../components/Messages'
import GuestNavbar from '../../components/GuestNavbar';
import FormGroup from '../../components/FormGroup'
import CenteredDiv from '../../components/CenteredDiv'

import AccountIcon from '../../assets/img/account.png'
import '../../assets/css/login.css'

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Api.post('/auth/authentications', {
            email: email,
            password: password
        }).then(response => {
            setAuthenticationData(response.data);
        }).catch(error => {
            console.error(error.response);
            showErrorMessages(error.response.data);
        });
    };

    const showErrorMessages = (data) => {
        data.errors.forEach(err => {
            showWarningMessage(err.message);
        });
    };

    const saveCurrentUser = (user) => {
        props.dispatch({
            type: "SET_USER",
            user: user
        });
    };

    const setAuthenticationData = (data) => {
        const headers = {
            headers: {
                "authorization": `Bearer ${data.jwt}`
            }
        };
        Api.get("/users/my", headers)
            .then(response => {
                saveCurrentUser(response.data);
            }).catch(error => {
                console.error(error.response);
            });

        props.dispatch({
            type: "SET_AUTHENTICATION",
            auth: data
        });
    };

    return (
        <>
            <GuestNavbar activeItem="login" />
            <div className="card card-container">
                <img id="profile-img" alt="Acessar conta" className="profile-img-card" src={AccountIcon} />
                <CenteredDiv>
                    <h3 className="form-title">Acesse sua conta</h3>
                </CenteredDiv>
                <form className="form-signin">
                    <FormGroup label="Email: *" labelFor="email">
                        <input type="email"
                            className="form-control"
                            id="email"
                            placeholder="Informe seu e-mail"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </FormGroup>
                    <FormGroup label="Senha: *" labelFor="password">
                        <input type="password"
                            className="form-control"
                            id="password"
                            placeholder="Informe sua senha"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </FormGroup>
                    <button type="button" className="btn btn-primary form-control" onClick={login}>Entrar</button>
                </form>
            </div>
            <CenteredDiv>
                <p>Não possui uma conta no sistema? <a href="#/cadastro" className="text-primary">Cadastre-se</a></p>
            </CenteredDiv>
        </>
    )
}

const mapStateToProps = store => ({});

const LoginConnected = connect(mapStateToProps)(Login);
export default withRouter(LoginConnected);