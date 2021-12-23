import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import App from './App';
import { initStore, StoreProvider } from './store';

import config from './config/default.json';

const store = initStore(config.api.apiUrl);

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
