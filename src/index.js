import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// *esm === es6 module
// client / host - repository where imported WebComponent(s) will be used.
// Had to add 'SKIP_PREFLIGHT_CHECK=true' to .env file in this repo to make external bundles works

/* Native WebComponent */

// Import of native WebComponent bundled without any polyfills to support per-component-versioning without bundled polyfill's code repetition.
// It can be bundled using Webpack without "library" / "libraryTarget" config fields (standard setup) === it ends up as IIFE.
// I didn't manage to make it works here as commonjs/commonjs2 bundle. Suprisingly, esm bundles are not supported by Webpack.
// import 'native-webcomponents-playground';

/* End of Native WebComponent */

/* LitElement WebComponent */

// Import of lit-element WebComponent (bundled in esm format) without lit-element library inside. 
// Imho, there are two strategies:

// 1. peerDependency strategy:
// "@polymer/lit-element" library has to be installed (added to package.json) on client / host - because
// it's defined inside WebComponent's package.json as a peerDependency. 

// If client's / host's developer will be warned after `npm install` on his repo like this:

// "npm WARN lit-element-webcomponents-playground@2.0.0 requires a peer of @polymer/lit-element@^0.6.3 but none is installed. 
// You must install peer dependencies yourself."" 

// it means that he is the first developer importing our convergence LitElement WebComponent on this repository and he has to
// manually install @polymer/lit-element to make that setup work.

// This is the way we can support per-component-versioning without placing lit-element library in each bundled Lit-element's WebComponent.
// I couldn't produce working "lit-element-webcomponents-playground" bundle in Webpack (it is not supporting esm bundles and it's cjs bundles don't work)
// So...I did it in Rollup.js and in Polymer - which is default bundling method.

// Polymer bundle without lit-element works but it generates inner node_modules folder that needs to be excluded from gitignore to make that setup works.
// In that setup defining peerDependencies makes no sense, we should probably investigate more tree-shaking in here (because imports aren't pointing to
// @polymer/lit-element but the local version from inner node_modules with relative path.)
// + in polymer config "bundle" flag needs to be set to false to not include polymer/lit-element in bundle.


// Polymer bundle (esm) (#master branch) - WORKS.

// Rollup bundle (esm) with peerDependency (#rollup-config-es6-bundle branch) - WORKS

// Rollup bundle (cjs) with peerDependency (#rollup-config-cjs-bundle branch) - WORKS

// Webpack bundle (cjs) with peerDependency (#webpack-cjs-bundle branch) - DOESN'T WORK

// 2. Dependency / dependency strategy:

// Instead of defining peerDependencies in LitElement WebComponent we could define LitElement as a standard dependency and then
// it will be automatically installed o host when it is imported inside (no need to put developers to manually do it).
// As long as each lit-element webcomponent will be using the same version we shouldn't end up with any problems.
// That ensurance is must-have anyway.

import "lit-element-webcomponents-playground";

/* End of LitElement WebComponent */

/* Stencil.js WebComponent(s) */

// Loader needed by Stencil.js in per-repository-versioning approach (standard, supported by Stencil.js)
// import { defineCustomElements } from 'stencil-webcomponents-playground/dist/loader';

// Loaders needed by Stencil.js in per-component-versioning approach. It is described more below.
// import { defineCustomElements as dfn2 } from '@carbonic/button/dist/loader';
// import { defineCustomElements as dfn3 } from '@carbonic/dropdown/dist/loader';

// We would import stencil.js WebComponent(s) this way if we want per-repository-versioning approach (standard, supported by Stencil.js)
// import "stencil-webcomponents-playground";

// We would import Stencil.js WebComponent(s) this way if we want per-component-versioning (multiple npm packages).
// It's working but bundle size is huge due to need of independent Stencil.js loader for each package.
// There is a way to import them differently with pointing exact component version via unpkg (see index.html <script> tag).
// However it's more for presentational use cases than real production use.
// Test repository used to check multi-npm-packages approach: https://github.com/kolodziejczakM/carbonic
// Imports for this approach:
// import "@carbonic/dropdown";
// import "@carbonic/button"; 

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// Calls needed by Stencil.js loaders (to make Stencil.js WebComponents works)
// Each loader are increasing final create-react-app bundle by ~30Kb.
// As you can see Stencil is not prepared for per-component-versioning usage.

// defineCustomElements(window);
// dfn2(window);
// dfn3(window);

/* End of Stencil.js WebComponent(s) */
