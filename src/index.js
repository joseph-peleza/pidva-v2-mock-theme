import React from "react";
import ReactDOM from "react-dom";

import NextApp from './NextApp';
import registerServiceWorker from './registerServiceWorker';


// Wrap the rendering in a function:
ReactDOM.render(<NextApp />, document.getElementById('root'));

// Do this once
registerServiceWorker();

