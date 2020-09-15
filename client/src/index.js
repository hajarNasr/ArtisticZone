import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/authReducer';
import dbItemsReducer from './store/reducers/dbItemsReducer';
import './css/index.css';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    authReducer,
    dbItemsReducer
})

export const store = createStore(rootReducers, composeEnhances(
    applyMiddleware(thunk)
));

ReactDOM.render( 
    <Router>
        <Provider store={store}>
           <App/>
        </Provider> 
    </Router>
  , 
   document.getElementById('root')
);