import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Router, Link } from "react-router-dom";
import { usernameChanged, passwordChanged, loginUser } from "../../actions";
import Header from "../Header";

class LoginForm extends Component {
  onUserNameChanged(event) {
    this.props.usernameChanged(event.target.value);
  }

  onPasswordChanged(event) {
    this.props.passwordChanged(event.target.value);
  }

  onLoginPress() {
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
  }

  componentDidMount() {
    if (this.props.status) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.status) {
      this.props.history.push("/");
    }
  }

  render() {
    const { username, password, loginError } = this.props;
    return (
      <div>
        <Header />
        <form>
          <h2 className="form-signin-heading"> Please sign in </h2>
          <label for="inputUsername"> Username</label>
          <input
            type="text"
            id="inputUsername"
            className="form-control validate"
            placeholder="UserName"
            value={username}
            onChange={this.onUserNameChanged.bind(this)}
          />
          <label for="inputPassword"> Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control validate"
            placeholder="Password"
            value={password}
            onChange={this.onPasswordChanged.bind(this)}
          />
        </form>
        {loginError}
        <button
          onClick={this.onLoginPress.bind(this)}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  const { username, password, status, loginError } = auth;
  return {
    username,
    password,
    status,
    loginError
  };
}

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginUser
})(LoginForm);
