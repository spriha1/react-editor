import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBold,
//   faItalic,
//   faUnderline
// } from "@fortawesome/free-solid-svg-icons";

class ListItem extends Component {
  state = {
    selected: false
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    const { selected } = this.state;
    this.setState({ selected: !selected });
  };

  render() {
    const { label } = this.props;
    const { selected } = this.state;
    return (
      <button
        className={selected ? "btn btn-link" : "btn btn-light"}
        onClick={() => this.handleChange()}
      >
        <li className="list-group-item">
          <FontAwesomeIcon icon={label} />
        </li>
      </button>
    );
  }
}

export default ListItem;
