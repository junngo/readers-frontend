import { createStore, combineReducers } from "redux";
import users from "redux/modules/user";

const reducer = combineReducers({
    users
})

let store = initialState => createStore(reducer);

export default store();
