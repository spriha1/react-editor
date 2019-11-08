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
  }

  getSelection = () => {
    const textArea = this.textAreaRef.current;
    console.log(
      textArea.value.substring(textArea.selectionStart, textArea.selectionEnd)
    );
  };

  render() {
    const { list } = this.state;
    return (
      <div className="card mx-auto my-auto">
        <div className="card-header">
          <ul className="list-group list-group-horizontal">
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
