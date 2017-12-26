import React, { Component } from "react";
import { HashRouter, Route, Router, Link } from "react-router-dom";
import { fetchUser, logout } from "../../actions";
import { connect } from "react-redux";
import StripePayments from "../StripePayments";
import { withRouter } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContent() {
    const { user } = this.props.auth;
    switch (user) {
      case false:
        return [
          <li>
            <Link to="/SignupForm">Sign up</Link>
          </li>,
          <li>
            <Link to="/LoginForm">Login with Email and Password</Link>
          </li>
        ];
      default:
        return [
          <li key="2">
            <a onClick={() => this.props.logout(this.props.history)}>Log out</a>
          </li>
        ];
    }
  }

  renderCredits() {
    const { user } = this.props.auth;
    if (user) {
      return (
        <li key="3" style={{ margin: "0 10px" }}>
          Balances : {user.credits}
        </li>
      );
    }
  }

  onLogOut() {
    this.props.logout();
  }

  render() {
    console.log(this.props.auth.user);
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            {this.renderCredits()}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, {
  logout,
  fetchUser
})(withRouter(Header));
