import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleStripeToken } from "../actions";
class StripePayments extends Component {
  render() {
    console.log(process.env.REACT_APP_STRIPE_KEY);

    return (
      <StripeCheckout
        name="yi"
        description="$5 for 20 emails"
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Top up credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleStripeToken })(StripePayments);
