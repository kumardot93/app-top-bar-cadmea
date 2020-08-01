import React from 'react';
import TopMain from './components/TopMain.js';
import ProfileReducer from './redux/reducer/Profile.js';
import MetaData from './redux/reducer/MetaData.js';
import { Provider } from 'react-redux';
import './index.css';

function Top(props) {
	return (
		<Provider store={props.store}>
			<TopMain />
		</Provider>
	);
}

export default Top;
export { ProfileReducer, MetaData }; //Reducers for Redux
export * as MetaStateAction from './redux/action/MetaData.js'; //Actions for Meta Data Reducer
