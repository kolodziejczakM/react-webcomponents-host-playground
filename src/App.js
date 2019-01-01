import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class DropdownComponentWrapper extends React.Component {
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
      "featuredDropdownValueChanged",
      this.props.onChange
    );
  }

  componentWillUnmount() {
    this.myRef.current.removeEventListener(
      "featuredDropdownValueChanged",
      this.props.onChange
    );
  }

  render() {
    return <featured-dropdown ref={this.myRef} />;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      received: ""
    };

    this.onDropdownChange = this.onDropdownChange.bind(this);
  }

  onDropdownChange(value) {
    console.log("value: ", value);

    this.setState({
      received: value.detail.label
    });
  }

  render() {
    return (
      <div className="App">
        <DropdownComponentWrapper onChange={this.onDropdownChange} />

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
