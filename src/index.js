import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from 'redux'
import RootReducer from './reducers';
import { Provider } from 'react-redux'


const store=createStore(RootReducer)


const rootElement = document.getElementById('root');
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, rootElement);
