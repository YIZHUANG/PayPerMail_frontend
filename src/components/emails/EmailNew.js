//showing survey review and survey form
import React, { Component } from "react";
import EmailForm from "./EmailForm";
import EmailFormReview from "./EmailFormReview";
import { reduxForm } from "redux-form";
import Header from "./Header";
import SideNav from "../common/SideNav.js";

class EmailNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showFormReview: false };
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <EmailFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <EmailForm
        onEmailSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s2">
            <SideNav />
          </div>
          <div className="col s9">
            <h5 className="center-align">Type in your entries and click next.</h5>
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "emailForm"
})(EmailNew);
