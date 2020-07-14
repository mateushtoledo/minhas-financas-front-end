const INITIAL_STATE = {
    authenticated: false,
    user: {},
    details: {}
};

const construirDadosAutenticacao = (dadosAutenticacao) => {
    let nowMs = new Date().getTime();
    let expiresIn = dadosAutenticacao.expiresIn;
    let refreshTokenAfter = parseInt(nowMs + ((expiresIn - nowMs) * 0.9));

    return {
        headers: {
            authorization: `Bearer ${dadosAutenticacao.jwt}`
        },
        expiration: new Date(expiresIn),
        refreshAfter: new Date(refreshTokenAfter)
    };
};

const AuthenticationReducer = (state = INITIAL_STATE, action) => {
    if (!action) {
        return INITIAL_STATE;
    }
    switch (action.type) {
        case 'SET_AUTHENTICATION':
            console.info("User authenticated...");
            return {...state, authenticated : true, details: construirDadosAutenticacao(action.auth)};
        case 'SET_USER':
            console.info("Saving current user...");
            return {...state, user : action.user};
        default:
            console.info("User logged out...");
            return INITIAL_STATE;
    }
};

export default AuthenticationReducer;