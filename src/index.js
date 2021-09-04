import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "redux/configureStore";
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

// print store for test of redux connection
console.log(store.getState());

// dispatch for test of logger on development
store.dispatch({ type: "HELLO" })

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
