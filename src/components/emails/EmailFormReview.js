//show users their inputs for the email form.
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import FIELDS from "./formFields";
import { submitEmail } from "../../actions/emailActions";
import { withRouter } from "react-router-dom";

const EmailFormReview = ({ formValues, onCancel, submitEmail, history }) => {
  const { title, subject, body, recipients, templeNumber } = formValues;

  const fieldsList = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  console.log({ templeNumber });

  return (
    <div>
      <h5>Confirm your entries</h5>
      {fieldsList}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Cancel
      </button>
      <button
        onClick={() => submitEmail(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send email
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.emailForm.values };
}

export default connect(mapStateToProps, { submitEmail })(
  withRouter(EmailFormReview)
);
