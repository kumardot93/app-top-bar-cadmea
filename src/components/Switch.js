import React from 'react';

/*
A presentation eleemt for bootstrap swicth
Benifit: seperation of concert: seperate pesentation and controller component
Less boilerplate code for creating bootstrap swicth
Movethis element to cadmea utility later
*/
function Swicth(props) {
	//required props: className, uniqueID, checked, onClick, label
	return (
		<div className={[ 'custom-control custom-switch', props.className ].join(' ')}>
			<input
				type="checkbox"
				id={props.uniqueID}
				className={`custom-control-input ${props.inputClass}`}
				checked={props.checked}
				onChange={props.onChange}
			/>
			<label className={`custom-control-label ${props.labelClass}`} htmlFor={props.uniqueID}>
				{props.label}
			</label>
		</div>
	);
}

export default Swicth;
