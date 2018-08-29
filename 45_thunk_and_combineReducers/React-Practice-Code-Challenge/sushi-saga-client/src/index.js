import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducer from './reducer'
import displayReducer from './displayReducer'
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({sushi: reducer, display: displayReducer})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
