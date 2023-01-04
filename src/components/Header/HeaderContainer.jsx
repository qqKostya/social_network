import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

export class HeaderContainer extends Component {
  
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(
  HeaderContainer
);
