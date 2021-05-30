import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/app.scss';
import './utils/icons';
import App from './App';
import { store } from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);
