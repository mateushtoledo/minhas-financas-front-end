import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './core/App';
import Store from './core/Store'

import './assets/css/index.css'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, document.getElementById('root')
);