import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import logger from 'redux-logger';

const initialStoreState = {};
const store = createStore(rootReducer, initialStoreState, applyMiddleware(logger));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
