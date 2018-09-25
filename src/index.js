import React from 'react';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Components
import ReactDOM from 'react-dom';

// Styles
import './css/index.css';

// Other packages
import 'normalize.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
