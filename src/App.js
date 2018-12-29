import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import 'native-webcomponents-playground';
// import 'lit-element-webcomponents-playground';
import "stencil-webcomponents-playground";

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

class StencilLogComponentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const node = this.myRef.current;
    node.label = "log";

    this.myRef.current.addEventListener(
      "featuredLogClicked",
      this.props.onChange
    );
  }

  componentWillUnmount() {
    this.myRef.current.removeEventListener(
      "featuredLogClicked",
      this.props.onChange
    );
  }

  render() {
    return <featured-log ref={this.myRef} />;
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
      console.log('onButtonChange');
  }

  render() {
    return (
      <div className="App">
        <StencilDropdownComponentWrapper onChange={this.onDropdownChange} />
        <StencilButtonComponentWrapper onChange={this.onButtonChange} label="Tralalala"/>
        <StencilLogComponentWrapper />

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
