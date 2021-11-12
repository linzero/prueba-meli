import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { itemsReducer } from "../reducers/itemsReducer";
import { uiReducer } from "../reducers/uiReducer";
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui:uiReducer,
    items:itemsReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);