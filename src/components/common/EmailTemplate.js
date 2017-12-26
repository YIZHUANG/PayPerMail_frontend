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
                    <img src="https://image.ibb.co/cz3bVR/We_Chat_Image_20171226020011.jpg" />
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
                    <img src="https://image.ibb.co/mcnQPm/We_Chat_Image_20171226020033.jpg" />
                  </div>
                  <div className="card-content center">
                    <p>Survey temple</p>
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
