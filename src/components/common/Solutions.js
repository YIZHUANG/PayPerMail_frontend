import React, { Component } from "react";
import Header from "../Header";

class Solutions extends Component {
  render() {
    return (
      <div>
        <Header />
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Solutions</th>
              <th>References</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User authentication</td>
              <td>
                Passport-local(authentication) and mongoose(user model) in the
                back-end, front-end Simple forms with redux
              </td>
              <td>
                <a href="https://www.npmjs.com/package/passport-local">
                  Passport local
                </a>
              </td>
            </tr>
            <tr>
              <td>Send mails</td>
              <td>
                Redux form in the front-end for taking input as well as allowing
                user to preview entries, send-grid api in the back-end.{" "}
              </td>
              <td>
                <a href="https://sendgrid.com/docs">Send grid api</a>
                <br />
                <a href="https://redux-form.com/7.2.0/">Redux form </a>
              </td>
            </tr>
            <tr>
              <td>Payment</td>
              <td>
                Stripe api, front-end sends the stripe token back to the
                back-end, back-end using Stripe api to complete the payment, and
                then adds the credits to the specific user.
              </td>
              <td>
                <a href="https://stripe.com/fi">Stripe</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Solutions;
