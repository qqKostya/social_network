import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainerCompose from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspens";
import { AppStateType } from "./redux/redux-store";

const ProfileContainer = withSuspense(
  React.lazy(() => import("./components/Profile/ProfileContainer"))
);
const DialogsContainer = withSuspense(
  React.lazy(() => import("./components/Dialogs/DialogsContainer"))
);


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
  // cathcAllUnhandleErrors = (promiseRejectionEvent) => {
  //   alert("Some error occurend");
  //   console.log(promiseRejectionEvent);
  // };

  componentDidMount() {
    this.props.initializeApp();

    // window.addEventListener(
    //   "unhandledrejection",
    //   this.cathcAllUnhandleErrors()
    // );
  }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "unhandledrejection",
  //     this.cathcAllUnhandleErrors()
  //   );
  // }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/users"
              element={<UsersContainerCompose pageTitle={"Samurais"} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
