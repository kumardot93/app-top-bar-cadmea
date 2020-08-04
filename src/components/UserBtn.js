import React, { useState } from 'react';
import styles from './css/UserBtn.module.css';
import Theme from './Theme.js';
import { connect } from 'react-redux';

function UserBtn(props) {
	const [ userPannelVis, changeVis ] = useState(0); //for visibility of user pannel

	return (
		<div className="ml-2">
			<button
				className="p-0"
				id={styles.userBtn}
				onClick={(event) => {
					changeVis((userPannelVis + 1) % 2);
				}}
			>
				<img //DP of user
					src={
						props.profile.fields.profile_pic !== undefined ? (
							props.media_url + props.profile.fields.profile_pic
						) : (
							''
						)
					}
					id={styles.userBtnImg}
					alt=""
				/>
			</button>
			<UserPannel
				visiblity={userPannelVis}
				profile={props.profile}
				metaData={props.MetaData}
				changeVis={changeVis}
			/>
		</div>
	);
}

function UserPannel(props) {
	return (
		<div
			id={styles.userPannel}
			className="p-2 pr-3 bg-white"
			style={{ display: props.visiblity === 0 ? 'none' : 'block' }}
		>
			<span className={styles.userData}>{props.profile.username}</span>
			<span className={[ styles.userData, 'text-secondary' ].join(' ')}>{props.profile.email}</span>

			<hr className="m-0 mt-1" />
			<Theme />

			<a //links profile and logout
				href="#"
				className={[ styles.userPannelLink, 'pb-0 mt-2 mb-1 mr-2 ml-1' ].join(' ')}
				style={{ opacity: '25%' }}
			>
				Profile
			</a>
			<a
				href={props.metaData.base + '/user/logout/'}
				className={[ styles.userPannelLink, 'pb-0 mb-0 mr-2 ml-1' ].join(' ')}
			>
				Logout
			</a>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		profile: state.Profile,
		media_url: state.MetaData.media_url,
		MetaData: state.MetaData
	};
};

export default connect(mapStateToProps)(UserBtn);
