import React, { Component } from "react";
import Header from "./Header";
import SideNav from "../common/SideNav.js";

class ReceipientList extends Component {

  render() {
    if (!this.props.recipient) {
      return <div>wait</div>;
    }
    return (
      <tr>
        <td>{this.props.recipient.email}</td>
        <td>{this.props.recipient.responded ? "True" : "Has not yet"}</td>
        <td>{this.props.recipient.like ? "1" : "0"}</td>
        <td>{this.props.recipient.dislike ? "1" : "0"}</td>
      </tr>
    );
  }
}

export default ReceipientList;
