import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import Home from "./components/Home";
import Solutions from "./components/common/Solutions";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import EmailNew from "./components/emails/EmailNew";
import Recipients from "./components/emails/recipients";
import EmailTemplate from "./components/common/EmailTemplate";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/LoginForm" component={LoginForm} />
              <Route exact path="/SignupForm" component={SignupForm} />
              <Route exact path="/Email" component={DashBoard} />
              <Route exact path="/Email/new" component={EmailNew} />
              <Route
                exact
                path="/Email/recipients/:id"
                component={Recipients}
              />
              <Route exact path="/" component={Home} />
              <Route exact path="/Solutions" component={Solutions} />
              <Route exact path="/EmailTemplate" component={EmailTemplate} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
