import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import '@polymer/lit-element'; - library that's needed by "lit-element-webcomponents-playground"
// import "lit-element-webcomponents-playground"; - lit element component (bundled in commonjs format) without lit-element library 
// bundled inside (to support per-component-versioning without placing lit-element in each bundled webcomponent). 
// That's why there is lit-element instance installed here - in component consumer (see package.json). It's peerDependency strategy. 
// It's not working properly though, probably because something is bundled incorrectly.

import 'native-webcomponents-playground'; // native webcomponent bundled without any polyfills

// Loader needed by stencil js (per-repository-versioning)
// import { defineCustomElements } from 'stencil-webcomponents-playground/dist/loader';

// Loaders needed by stencil js per-component-versioning approach. It is described more below.
// import { defineCustomElements as dfn2 } from '@carbonic/button/dist/loader';
// import { defineCustomElements as dfn3 } from '@carbonic/dropdown/dist/loader';

// import "stencil-webcomponents-playground"; we would use it this way if we don't want per-component-versioning

// import "@carbonic/dropdown";
// import "@carbonic/button"; 
// the way we can use stencil in variation: per-component-versioning. It's working but bundle size is huge due to
// need of independent loader for each package. There is a way to import proper, independent component version via unpkg
// which is not that problematic but it's more for presentational use cases than real production use.
// repository: https://github.com/kolodziejczakM/carbonic

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// defineCustomElements(window);
// dfn2(window);
// dfn3(window);
// As you can see Stencil is not prepared for versioning-per-component usage. We end up with multiple loaders which
// are increasing final bundle size a lot (~30Kb per loader)
