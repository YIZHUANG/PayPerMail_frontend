import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmails, deleteEmails } from "../../actions/emailActions";
import { withRouter } from "react-router-dom";
import axios from "axios";

class EmailList extends Component {
  componentDidMount() {
    this.props.fetchEmails();
  }

  showRecipients(id) {
    this.props.history.push("./Email/recipients/" + id);
  }

  deleteEmail(id) {
    /* global location */
    /* eslint no-restricted-globals: ["off", "location"] */ //this is to disable the warning for using confirm function.
    if (confirm("Are you sure ?")) {
      this.props.deleteEmails(id, () => this.props.fetchEmails());
    }
  }

  renderEmails() {
    return this.props.emails.reverse().map(email => {
      return (
        <div className="card" key={email._id}>
          <div className="card-content">
            <a
              onClick={this.deleteEmail.bind(this, email._id)}
              className="right btn"
            >
              Delete
            </a>
            <span className="card-title center">{email.title}</span>
            <p>{email.body}</p>
            <p className="right">
              CreationDate : {new Date(email.creationDate).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Positive feedback: {email.like}</a>
            <a>Negative feedback: {email.dislike} </a>
            <a
              className="right"
              onClick={this.showRecipients.bind(this, email._id)}
            >
              Recipients{" "}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderEmails()}</div>;
  }
}

function mapStateToProps({ emails }) {
  return { emails };
}

export default connect(mapStateToProps, { fetchEmails, deleteEmails })(
  withRouter(EmailList)
);
