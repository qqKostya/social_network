import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 27227;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  // isAuth: state.auth.isAuth,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
