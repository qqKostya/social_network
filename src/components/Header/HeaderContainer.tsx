import React, { Component } from "react";
import Header, { DispatchPropsType, MapPropsType } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

export class HeaderContainer extends Component<MapPropsType & DispatchPropsType> {

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { logout })(
  HeaderContainer
);
