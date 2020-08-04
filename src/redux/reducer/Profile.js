const Profile = (state = { fields: {} }, action) => {
	switch (action.type) {
		case 'updateProfile':
			state = { ...action.payload };
			break;
		default:
			break;
	}
	return state;
};

export default Profile;
