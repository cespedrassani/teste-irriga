import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
