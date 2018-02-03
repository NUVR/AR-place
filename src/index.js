import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';

const rootEl = document.querySelector('#root');
ReactDOM.render(<App />, rootEl);

if(module.hot) {
    module.hot.accept('./layouts/App', function() {
        const NextApp = require('./layouts/App').default;
        ReactDOM.render(<NextApp />, rootEl);
    });
}
