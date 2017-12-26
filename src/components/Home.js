import React, { Component } from "react";
import Header from "./Header";
import HomeContent from "./common/HomeContent";
import { fetchUser, logout } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <HomeContent />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser, logout })(Home);
