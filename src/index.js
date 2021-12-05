import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/reducers';
import thunk from 'redux-thunk';
import { apiMiddleware } from './redux/api/middleware.api';
import { Provider } from 'react-redux';

const store =createStore(rootReducer,applyMiddleware(thunk, apiMiddleware))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
