import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import CenteredDiv from '../components/centered-div'
import AccountIcon from '../img/account.png'

class Login extends React.Component {

    state = {
        email: "",
        password: ""
    };

    login = () => {
        console.log("E-mail: " + this.state.email);
        console.log("Senha: " + this.state.password);
    };

    register = () => {

    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            <Card>
                                <CenteredDiv>
                                    <img src={AccountIcon} alt="Acesse sua conta" className="max-width-170" />
                                    <h3>Acesse sua conta</h3>
                                </CenteredDiv>
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
            </div>
        )
    }
}

export default Login;