import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'

import App from './App';
import Store from './core/Store'

import './assets/css/index.css'

ReactDOM.render(
    <CookiesProvider>
        <Provider store={Store}>
            <App />
        </Provider>, document.getElementById('root')
    </CookiesProvider>
);