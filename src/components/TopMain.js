import React, { useEffect } from 'react';
import styles from './css/Top.module.css';
import Nav from './Nav.js'; //To navigation bar
import UserBtn from './UserBtn.js'; //Top rightuser btn
import Notiification from './Notification.js';

import { connect } from 'react-redux';
import { updateProfile } from './../redux/action/Profile.js';

// Entry point for the top bar
function Top(props) {
	//Fetching the user profile data
	useEffect(
		() => {
			//Get url from props before publish
			fetch(props.profile_url, { credentials: props.fetch_credentials }) //fetching profile data
				.then((response) => response.json())
				.then((profileData) => props.updateProfile(profileData));
		},
		[ props ]
	);
	return (
		<div id={styles.topBar} className="d-flex flex-row align-items-center w-100 pl-2 pr-3">
			<h1 className="display-4 ml-2" id={styles.title} onClick={() => window.location.assign('/')}>
				<span>Cadmea</span>
			</h1>
			{/* nav will not appear in the mobile view */}
			<Nav />
			<Notiification />
			<UserBtn />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		profile_url: state.MetaData.profile_url,
		fetch_credentials: state.MetaData.fetch_credentials
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProfile: (data) => dispatch(updateProfile(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
