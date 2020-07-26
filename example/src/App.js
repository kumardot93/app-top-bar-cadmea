import React from 'react';
import Top, { css } from 'app-top-bar-cadmea';

import Store from './redux/Store.js';

function App(props) {
	return <Top store={Store} />;
}

export default App;
