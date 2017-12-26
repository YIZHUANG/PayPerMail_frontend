import React, { Component } from "react";
import "./Home.css";

class HomeContent extends Component {
  render() {
    return (
      <div>
        <div className="col s12 body">
          <div className="card blue-grey darken-1 hoverable">
            <div className="card-action center">
              <p className="center light-blue lighten-5">
                Log in with google or just Sign up for an account and then log
                in ,top up some credits using 42424242424242 as the credit card
                number, the rest doesnt matter..
              </p>
              <a href="/SignupForm">Get started</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
