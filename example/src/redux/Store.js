import { createStore, combineReducers } from 'redux';
import { ProfileReducer, MetaData } from 'app-top-bar-cadmea';

//This code takes the default initial state of MetaData and Extends and Modify for development
let MetaDataDev = MetaData(undefined, {}); //Default Meta State
function DevSetup(MetaState) {
	//function to modify default state according to devlopment
	let state = { ...MetaState };
	state.base = 'http://localhost:8000';
	state.media_url = state.base + '/media/';
	state.fetch_credentials = 'include';
	state.profile_url = state.base + state.profile_url;
	return state;
}
let DevMetaState = DevSetup(MetaDataDev); //modified state

const Store = createStore(combineReducers({ Profile: ProfileReducer, MetaData }), { MetaData: DevMetaState }); //Passing the new default state

export default Store;
