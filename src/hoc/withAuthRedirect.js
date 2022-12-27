import React, { Component } from "react";
import { Navigate } from "react-router-dom";

const withAuthRedirect = () => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} />;
      return <Component {...this.props} />;
    }
  }

  return RedirectComponent;
};

export default withAuthRedirect;
