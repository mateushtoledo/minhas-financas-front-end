import { connect } from 'react-redux'
import Api from '../core/Api'
import SystemError from './SystemError'

class LoginService {
    login = (email, password) => {
        // Build request body
        let userCredentials = {
            email: email,
            password: password
        };

        // Try login
        Api.post("/login", userCredentials)
        .then(response => {
            return response.data;
        }).catch(error => {
            throw new SystemError(error.response);
        });
    };

    logout = () => {

    };
};

const mapStateToProps = store => ({
    authenticated: store.authenticated,
    details: store.details
});

const LoginServiceConnected = connect(mapStateToProps)(LoginService);
export default withRouter(LoginServiceConnected);