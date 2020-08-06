const MetaData = (
	state = {
		base: '',
		profile_url: '/user/api/profile',
		fetch_credentials: 'same-origin',
		media_url: 'https://cadmea.blob.core.windows.net/education/',
		theme: {
			light: [
				[ '--body-color', 'rgb(247, 247, 247)' ],
				[ '--primary-bgColor', 'white' ],
				[ '--complementary-bgColor', 'black' ],
				[ '--secondary-bgColor', 'rgb(220, 225, 225)' ],
				[ '--primary-color', 'black' ],
				[ '--secondary-color', 'rgba(50, 50, 50, 0.7)' ],
				[ '--primary-shadow-color', 'black' ],
				[ '--green-color', 'green' ]
			],
			dark: [
				[ '--body-color', 'rgba(0, 0, 0, 0.9)' ],
				[ '--primary-bgColor', 'rgb(30, 34, 36)' ],
				[ '--secondary-bgColor', 'rgb(60, 65, 70)' ],
				[ '--complementary-bgColor', 'white' ],
				[ '--primary-color', 'white' ],
				[ '--secondary-color', 'silver' ],
				[ '--primary-shadow-color', 'white' ],
				[ '--green-color', 'lightgreen' ]
			]
		}
	},
	action
) => {
	state = { ...state };
	switch (action.type) {
		case 'updateState':
			state = { ...action.payload };
			break;
		default:
			break;
	}
	return state;
};

export default MetaData;
