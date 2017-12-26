import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Router, Link } from "react-router-dom";
import { usernameChanged, passwordChanged, signUpUser } from "../../actions";
import Header from "../Header";

class SignupForm extends Component {
  onUserNameChanged(event) {
    this.props.usernameChanged(event.target.value);
  }

  onPasswordChanged(event) {
    this.props.passwordChanged(event.target.value);
  }

  onLoginPress() {
    const { username, password } = this.props;
    this.props.signUpUser({ username, password });
  }

  render() {
    const { username, password, signUpMessage } = this.props;
    return (
      <div>
        <Header />
        <form className="form-signin">
          <h2 className="form-signin-heading">sign up</h2>
          <label for="inputUsername" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="inputUsername"
            className="form-control validate"
            placeholder="UserName"
            value={username}
            onChange={this.onUserNameChanged.bind(this)}
            required
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control validate"
            placeholder="Password"
            value={password}
            onChange={this.onPasswordChanged.bind(this)}
            required
          />
        </form>
        {signUpMessage.success ? (<Link to="/LoginForm">An account has been created for you , click here to log in</Link>)
        : (signUpMessage.message)}
        <button
          onClick={this.onLoginPress.bind(this)}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >Sign up
      </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username, password, signUpMessage } = state.auth;
  return {
    username,
    password,
    signUpMessage
  };
}

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  signUpUser
})(SignupForm);
