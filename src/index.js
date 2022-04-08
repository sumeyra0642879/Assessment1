import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import CandidateReducer from './reducers/CandidateReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
import promise from 'redux-promise-middleware'

const allExtensions = composeWithDevTools(applyMiddleware(thunk, promise, logger))
const myStore = createStore(CandidateReducer, allExtensions)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={myStore}>
   <App />
   </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
