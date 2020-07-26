import React from 'react';
import Top from 'app-top-bar-cadmea';
import 'app-top-bar-cadmea/dist/index.css';

import Store from './redux/Store.js';

function App(props) {
	return <Top store={Store} />;
}

export default App;
