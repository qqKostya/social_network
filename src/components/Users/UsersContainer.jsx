import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFolowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSuperSelector,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          folowingInProgress={this.props.folowingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    folowingInProgress: getFolowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
