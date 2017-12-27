import React, { Component } from "react";
import "../styling/Home.css";
import { HashRouter, Route, Router, Link } from "react-router-dom";

class HomeContent extends Component {
  render() {
    return (
      <div>
        <div className="col s12 body">
          <div className="container-fluid bg-1 text-center">
            <h3>How to use?</h3>
            <p>Sign up for an account or use google log in.</p>
            <p>
              Then go to dashboard top up your account balance in the side
              navigation
            </p>
            <p>Using credit card number 42424242424242</p>
            <a href="/SignupForm" className="btn btn-default btn-lg">
              Get started
            </a>
          </div>
          <div className="container-fluid bg-2 text-center" />
          <div className="container-fluid bg-3 text-center" />
          <footer className="container-fluid bg-4 text-center">
            <p>
              Go to{" "}
              <a href="https://github.com/YIZHUANG">
                https://github.com/YIZHUANG
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomeContent;
