import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

let middlewares = [];
// middlewares.push(updateWheelInfo);

// let middleware = applyMiddleware(window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer);
const persister = 'Free';
window.store = store;

export { store, persister };
