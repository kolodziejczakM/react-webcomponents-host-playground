import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'native-webcomponents-playground';
// import 'lit-element-webcomponents-playground';
import 'stencil-webcomponents-playground';

const renderItJSXLike = () => {
  return (
    <featured-dropdown chosen-option={{ "label": "Poland", "value": "PL" }} options={[
      { "label": "Poland", "value": "PL" },
      { "label": "Germany", "value": "DE" },
      { "label": "Sweden", "value": "SE" },
      { "label": "Norway", "value": "NO" }
    ]}>
    </featured-dropdown> 
  );
};

const renderForLit = () => {
  return (
    <featured-dropdown
      chosen-option='{ "label": "Poland", "value": "PL" }'
      options='[
        { "label": "Poland", "value": "PL" },
        { "label": "Germany", "value": "DE" },
        { "label": "Sweden", "value": "SE" },
        { "label": "Norway", "value": "NO" }
      ]'
    >
    </featured-dropdown>
  );
}

class StencilComponentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const node = this.myRef.current;
    node.chosenOption = { "label": "Poland", "value": "PL" };
    node.options = [
      { "label": "Poland", "value": "PL" },
      { "label": "Germany", "value": "DE" },
      { "label": "Sweden", "value": "SE" },
      { "label": "Norway", "value": "NO" }
    ];
  }

  render() {
    return <featured-dropdown ref={this.myRef} ></featured-dropdown>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {
          renderItJSXLike()
        } */}

        {/* {
          renderForLit()
        } */}
        <StencilComponentWrapper />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
