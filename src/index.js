import React from 'react';
import TopMain from './components/TopMain.js';
import ProfileReducer from './redux/reducer/Profile.js';
import { Provider } from 'react-redux';
import css from './components/css/Top.module.css';

function Top(props) {
	return (
		<Provider store={props.store}>
			<TopMain />
		</Provider>
	);
}

export default Top;
export { ProfileReducer, css };
