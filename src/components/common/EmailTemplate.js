import React, { Component } from "react";
import Header from "../emails/Header";
import SideNav from "./SideNav";

class EmailTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s2">
            <SideNav />
          </div>
          <div className="col s9">
            <div className="row">
              <div className="col s6">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src="https://s3.amazonaws.com/digitalmarketer-downloads/website/content/uploads/2016/01/ecommerce-email-guide-img36.jpg" />
                  </div>
                  <div className="card-content center">
                    <p>Promotional template</p>
                  </div>
                  <div className="card-action center">
                    <a>Template number 1</a>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src="https://emaildesign.beefree.io/wp-content/uploads/2016/05/survey-23.png" />
                  </div>
                  <div className="card-content center">
                    <p>Survey template</p>
                  </div>
                  <div className="card-action center">
                    <a>Template number 2</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailTemplate;
