import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import '@polymer/lit-element'; - library that's needed by "lit-element-webcomponents-playground"
// import 'native-webcomponents-playground'; - native webcomponent bundled without any polyfills. Working outside react (see index.html)
// but not inside.

// import "lit-element-webcomponents-playground"; - lit element component (common js) without lit-element bundled inside. That's why
// there is lit-element installed (in client host) => see package.json. It's not working properly though.
import "stencil-webcomponents-playground";
import "@carbonic/button"; // the way we can use stencil in variation: versioning-per-component. It's working but bundle size is huge due to
// need of independent loader for each package. There is a way to import proper component version via unpkg though which is not that problematic
// but it's more for presentational use cases than real production use.
import "@carbonic/dropdown";

class StencilDropdownComponentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const node = this.myRef.current;
    node.chosenOption = { label: "Poland", value: "PL" };
    node.options = [
      { label: "Poland", value: "PL" },
      { label: "Germany", value: "DE" },
      { label: "Sweden", value: "SE" },
      { label: "Norway", value: "NO" }
    ];

    this.myRef.current.addEventListener(
      "dropdownValueChanged",
      this.props.onChange
    );
  }

  componentWillUnmount() {
    this.myRef.current.removeEventListener(
      "dropdownValueChanged",
      this.props.onChange
    );
  }

  render() {
    return <featured-dropdown ref={this.myRef} />;
  }
}

class StencilButtonComponentWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }

    componentDidMount() {
      const node = this.myRef.current;
      node.label = "xdd";

      this.myRef.current.addEventListener(
        "featuredButtonClicked",
        this.props.onChange
      );
    }

    componentWillUnmount() {
      this.myRef.current.removeEventListener(
        "featuredButtonClicked",
        this.props.onChange
      );
    }

    render() {
      return <featured-button ref={this.myRef} />;
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      received: ""
    };

    this.onDropdownChange = this.onDropdownChange.bind(this);
    this.onButtonChange = this.onButtonChange.bind(this);
  }

  onDropdownChange(value) {
    console.log("value: ", value);
    this.setState({
      received: value.detail.label
    });
  }

  onButtonChange() {
    console.log("onButtonChange");
  }

  render() {
    return (
      <div className="App">
        <StencilDropdownComponentWrapper onChange={this.onDropdownChange} />
        <StencilButtonComponentWrapper onChange={this.onButtonChange} label="Tralalala"/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Received: {this.state.received}</p>
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
