import React, { Component } from "react";
import { HashRouter, Route, Router, Link } from "react-router-dom";
import { fetchUser, logout } from "../actions";
import { connect } from "react-redux";
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
          </li>,
          <li>
            <a href="/api/google">Login with Google</a>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Link to={this.props.auth.user ? "/Email" : "/"}>Dashboard</Link>
          </li>,
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
          Credits : {user.credits}
        </li>
      );
    }
  }

  onLogOut() {
    this.props.logout();
  }

  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a className="brand-logo">
            <Link to="/">PayPerMail</Link>
          </a>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li className="tab">
              <Link to="/Solutions">Solutions</Link>
            </li>
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
