import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Switch from './Switch.js';
import styles from './css/UserBtn.module.css';

import { connect } from 'react-redux';

//Controller component for Theme
function Theme(props) {
	const [ theme, changeTheme ] = useState('light'); //state to hold theme, theme is stored in cookie also

	let SwitchThemeController = () => {
		let newTheme = theme === 'dark' ? 'light' : 'dark'; //switching to new theme based on current theme
		Cookies.set('theme', newTheme);
		changeTheme(newTheme);
		props.theme[newTheme].forEach((rule) => {
			//iterates over MetaData.theme.dark/light and set proporty of root
			document.documentElement.style.setProperty(rule[0], rule[1]);
		});
	};

	useEffect(() => {
		let prevTheme = Cookies.get('theme');
		if (prevTheme == 'dark') SwitchThemeController(); //Checks for previous theme setting in cookie
	}, []);
	console.log(styles.themeColor);
	return (
		<Switch //Presentation component for theme. It is a general bootstrap switch
			className={`mt-1 ${styles.userData}`}
			uniqueID="switch"
			checked={theme === 'dark'}
			onChange={SwitchThemeController}
			label="Dark Mode"
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		theme: state.MetaData.theme
	};
};

export default connect(mapStateToProps)(Theme);
