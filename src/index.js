import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore";
import reportWebVitals from 'reportWebVitals';
import I18n from "redux-i18n";

import App from 'App';
import { translations } from "translation";
import 'index.css';

// print store for test of redux connection
console.log(store.getState());

// dispatch for test of logger on development
store.dispatch({ type: "HELLO" })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <I18n translations={translations} initialLang="en" fallbackLang="en">
          <App />
        </I18n>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
