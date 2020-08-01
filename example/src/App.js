import React from 'react';
import styles from './styles.module.css';
import Top from 'app-top-bar-cadmea';
import 'app-top-bar-cadmea/dist/index.css';

import Store from './redux/Store.js';

function App(props) {
	return (
		<React.Fragment>
			<Top store={Store} />
			<div className={styles.checkDiv} id="aa" />
		</React.Fragment>
	);
}

export default App;
