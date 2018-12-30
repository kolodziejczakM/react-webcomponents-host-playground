import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { defineCustomElements } from 'stencil-webcomponents-playground/dist/loader';
import { defineCustomElements as dfn2 } from '@carbonic/button/dist/loader';
import { defineCustomElements as dfn3 } from '@carbonic/dropdown/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
defineCustomElements(window);
dfn2(window);
dfn3(window);

// As you can see Stencil is not prepared for versioning-per-component usage. We end up with multiple loaders which
// are increasing final bundle size a lot (+30Kb per loader)
