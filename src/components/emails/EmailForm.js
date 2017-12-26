import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import EmailField from "./EmailField";
import validateEmailAddress from "../../utils/validateEmails";
import FIELDS from "./formFields";

class EmailForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={EmailField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onEmailSubmit)}>
          {this.renderFields()}
          <Link to="/Email" className="btn btn-red">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmailAddress(values.recipients || "");

  _.each(FIELDS, ({ name, error }) => {
    if (!values[name]) {
      errors[name] = error;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "emailForm",
  destroyOnUnmount: false
})(EmailForm);
