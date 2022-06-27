import {legacy_createStore as createStore} from "redux";
import { applyMiddleware } from "redux";
import { reducer } from "./reducer.js"
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
export const store=createStore(
    reducer,
    applyMiddleware(thunk)
)

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
