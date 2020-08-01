import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Switch from './Switch.js';

//Controller component for Theme
function Theme(props) {
	const [ theme, changeTheme ] = useState('light'); //state to hold theme, theme is stored in cookie also

	let SwitchThemeController = () => {
		let newTheme = theme === 'dark' ? 'light' : 'dark'; //switching to new theme based on current theme
		Cookies.set('theme', newTheme);
		changeTheme(newTheme);
	};

	useEffect(
		() => {
			let prevTheme = Cookies.get('theme');
			if (prevTheme == 'dark') SwitchThemeController();
		},
		[ 1 ] //constant is passes to run this block of code only once
	);

	return (
		<Switch //Presentation component for theme. It is a general bootstrap switch
			className="mt-1"
			uniqueID="switch"
			checked={theme === 'dark'}
			onChange={SwitchThemeController}
			label="Dark Mode"
		/>
	);
}
export default Theme;
