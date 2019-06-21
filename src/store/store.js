    
/**
 * Libraries
 */

import { 
    createStore 
} from "redux";

import {
    combineReducers
} from 'redux';

// import rootReducers from "../reducers/rootReducer";
import exampleReducer from '../reducers/exampleReducer';

const store = createStore(exampleReducer);
export default store;