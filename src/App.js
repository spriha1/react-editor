import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ListItem from "./components/listItem";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    totalValue: "",
    selectValue: "",
    list: [
      {
        label: faBold,
        id: 1
      },
      {
        label: faItalic,
        id: 2
      },
      {
        label: faUnderline,
        id: 3
      }
    ]
  };

  constructor(props) {
    super(props);
    this.textAreaRef = React.createRef();
    this.getSelection = this.getSelection.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCaptureChange = this.handleCaptureChange.bind(this);
  }

  getSelection = () => {
    const textArea = this.textAreaRef.current;
    const totalValue = textArea.value;
    console.log(textArea.selectionStart);
    console.log(textArea.selectionEnd);

    const selectValue = textArea.value.substring(
      textArea.selectionStart,
      textArea.selectionEnd
    );
    this.setState({ totalValue, selectValue });
    console.log(
      textArea.value.substring(textArea.selectionStart, textArea.selectionEnd)
    );
  };

  handleEvent = () => {
    const totalValue = this.state.totalValue;
    const oldValue = this.state.selectValue;
    const newValue = "<strong>" + this.state.selectValue + "</strong>";
    const result = totalValue.replace(oldValue, newValue);
    console.log("total", totalValue);
    console.log("old", oldValue);
    // console.log("new", dangerouslySetInnerHTML(newValue));
    console.log(result);
  };

  handleChange = () => {
    consile.log("change");
  };

  handleCaptureChange = () => {
    consile.log("capture");
  };

  render() {
    const { list } = this.state;
    return (
      <div className="card mx-auto my-auto">
        <div
          contentEditable="true"
          onChangeCapture={() => this.handleCaptureChange()}
          onChange={() => this.handleChange()}
        >
          hello
        </div>
        <div className="card-header">
          <ul className="list-group list-group-horizontal">
            <li>
              <button onClick={() => this.handleEvent()}>Event</button>
            </li>
            {list.map(listItem => (
              <ListItem
                key={listItem.id}
                id={listItem.id}
                label={listItem.label}
              />
            ))}
          </ul>
        </div>
        <div className="card-body">
          <textarea
            onMouseUp={() => this.getSelection()}
            ref={this.textAreaRef}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
