import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, getAuth } from "../../redux/auth-reducer";
import userAPI from "../../api/api";

export class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuth()
  }
  render() {
    return <Header {...this.props} />;
  }
}



let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, getAuth })(HeaderContainer);
