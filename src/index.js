import React from 'react';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Components
import ReactDOM from 'react-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './css/index.css';
import './css/global.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
