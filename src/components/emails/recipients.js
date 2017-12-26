import React, { Component } from "react";
import Header from "./Header";
import SideNav from "../common/SideNav.js";
import axios from "axios";
import RecipientList from "./recipientList";

class Recipients extends Component {
  constructor(props) {
    super(props);
    this.state = { recipients: [] };
    this.getRecipientsByEmailId = this.getRecipientsByEmailId.bind(this);
    this.getRecipientsByEmailId();
  }

  componentDidMount() {
    axios
      .get("/api/recipients/" + this.props.match.params.id)
      .then(res => {
        this.setState({ recipients: res.data[0].recipients });
        console.log(res.data[0].recipients);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRecipientsByEmailId() {}

  renderRecipients() {
    return this.state.recipients.map(recipient => {
      return <RecipientList key={recipient._id} recipient={recipient} />;
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s2">
            <SideNav />
          </div>
          <div className="col s9">
            <h5 className="center-align">List of recipients.</h5>
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Responded</th>
                  <th>Like</th>
                  <th>Dislike</th>
                </tr>
              </thead>
              <tbody>{this.renderRecipients()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipients;
