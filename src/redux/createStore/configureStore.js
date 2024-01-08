import { combineReducers, compose, legacy_createStore } from "redux";

import listNotesReducer from "../reducers/listNotesReducer";
import inputTextReducer from "../reducers/inputsDataReducer";
import filterReducer from "../reducers/filterReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
    return legacy_createStore(
        combineReducers({
            notes: listNotesReducer,
            inputText: inputTextReducer,
            filter: filterReducer,
        }), 
        undefined,
        compose(
            ReactReduxDevTools,
        ),
    )
} 