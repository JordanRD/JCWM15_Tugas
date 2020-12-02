import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducer'

//! MAKE VARIABEL FOR CREATESTORE

const globalState = createStore(allReducers)

//! subscribe variable golbalState for console.log each time we call redux
// globalState.subscribe(()=>console.log('Global State : ', globalState.getState()))

ReactDOM.render(
    <Provider store={globalState}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
