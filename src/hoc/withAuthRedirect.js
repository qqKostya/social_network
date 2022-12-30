import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";



let mapStateToPropsForRedirect = (state) => ({
  // profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Components) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} />;
      return <Components {...this.props} />;
    }
  }
  
  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectAuthRedirectComponent;
};

export default withAuthRedirect;
