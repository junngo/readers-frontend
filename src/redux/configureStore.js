import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n"
import users from "redux/modules/user";

const env = process.env.NODE_ENV;

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const reducer = combineReducers({
    users,
    router: connectRouter(history),
    i18nState
})

let store;
if (env === "development") {
    store = initialState => 
        createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
    store = initialState =>
        createStore(reducer, applyMiddleware(...middlewares));
}


export  { history };

export default store();
