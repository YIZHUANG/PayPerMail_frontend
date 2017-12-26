import React, { Component } from "react";
import "./SideNav.css";
import { HashRouter, Route, Router, Link } from "react-router-dom";
import { fetchUser } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StripePayments from "../StripePayments";

class SideNav extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderCredits() {
    const { user } = this.props.auth;
    if (user) {
      return [
        <li className="waves-effect" key="3" style={{ margin: "0 10px" }}>
          Your current credits is : {user.credits}
        </li>,
        <li>
          <StripePayments />
        </li>
      ];
    } else {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="gap-patch">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }
  }

  renderUserProfile() {
    const { user } = this.props.auth;
    if (user.google) {
      if (user.google.name && user.google.email) {
        return [
          <a>
            <span className="white-text name">Hello {user.google.name} !</span>
          </a>,
          <a>
            <span className="white-text email">{user.google.email}</span>
          </a>
        ];
      }
    } else if (user.local) {
      return (
        <a>
          <span className="white-text name">Hello {user.local.username} !</span>
        </a>
      );
    } else {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="gap-patch">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <ul className="side-nav fixed">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="https://www.elmsln.org/sites/redesign/files/blog-post/Create%20Blog%20post/header-image/office.jpg" />
            </div>
            <a>
              <img
                className="circle center"
                src="https://s-media-cache-ak0.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
              />
            </a>
            {this.renderUserProfile()}
          </div>
        </li>
        <li>
          <Link to="/Email">
            <i className="material-icons">cloud</i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/EmailTemplate">Email templates</Link>
        </li>
        <li>
          <a>Getting started</a>
        </li>
        <li>
          <a>Marking</a>
        </li>
        <li>
          <a>Activity</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Account balance</a>
        </li>
        <li>{this.renderCredits()}</li>
      </ul>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, {
  fetchUser
})(withRouter(SideNav));
