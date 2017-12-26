import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmailList from "./emails/emailList";
import Header from "./emails/Header";
import SideNav from "./common/SideNav";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s2">
            <SideNav />
          </div>
          <div className="col s9">
            <div className="card blue-grey darken-1 hoverable">
              <div className="card-content white-text">
                <span className="card-title center">Hello !</span>
                <p className="center">
                  Click top-up button on the side navigation to top up your
                  balance
                </p>
              </div>
              <div className="card-action center">
                <p className="center light-blue">
                  Click the add button on the button right cornor to send emails
                </p>
                <Link to="/Email/new">Or just click here</Link>
              </div>
            </div>
            <EmailList />
            <div className="fixed-action-btn">
              <Link
                to="/Email/new"
                className="btn-floating btn-large red pulse"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
