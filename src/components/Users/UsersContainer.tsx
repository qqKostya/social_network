import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  actions,
  unfollow,
  getUsers,
  FilterType,
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
  getUsersFilter
} from "../../redux/users-selectors";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UsersType>
  folowingInProgress: Array<number>
  filter: FilterType
}

type MapDispatchPropsType = {

  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  setCurrentPage: (pageNumber: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize, this.props.filter);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
  };

  onFilterChanged = (filter: FilterType) => {
    let { pageSize } = this.props;
    this.props.getUsers(1, pageSize, filter);
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          folowingInProgress={this.props.folowingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    folowingInProgress: getFolowingInProgress(state),
    filter: getUsersFilter(state),
  };
};

let setCurrentPage = actions.setCurrentPage

const UsersContainerCompose = compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  })
)(UsersContainer)

export default UsersContainerCompose
