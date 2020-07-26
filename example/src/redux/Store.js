import { createStore, combineReducers } from 'redux';
import { ProfileReducer } from 'app-top-bar-cadmea';
import MetaData from './MetaData.js';

const Store = createStore(combineReducers({ Profile: ProfileReducer, MetaData }), {});

export default Store;
