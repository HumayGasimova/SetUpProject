    
/**
 * Libraries
 */

import { 
    createStore,
    applyMiddleware,
    compose
} from "redux";

import {
    combineReducers
} from 'redux';
import { 
    createLogger
} from 'redux-logger';

// import rootReducers from "../reducers/rootReducer";
import exampleReducer from '../reducers/exampleReducer';

// const middlewares = [logger];
// const store = createStore(
//     exampleReducer,
//     {},
//     applyMiddleware(logger)
//     );


//actions in a collapsed view
const logger = createLogger({collapsed:true});

const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddleware(exampleReducer)

export default store;