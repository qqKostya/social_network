import React, { useEffect } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSerchForm from "./UsersSerchForm";
import { FilterType, getUsers, follow as followReducer, unfollow as unfollowReducer } from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFolowingInProgress, getPageSize, getTotalUsersCount, getUsersFilter, getUsersSuperSelector } from "../../redux/users-selectors";
import { AppDispatch } from "../../redux/redux-store";

type PropsType = {}

const Users: React.FC<PropsType> = () => {

  const users = useSelector(getUsersSuperSelector)
  const folowingInProgress = useSelector(getFolowingInProgress)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, filter))
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter))
  }

  const unfollow = (userId: number) => {
    dispatch(unfollowReducer(userId))
  }

  const follow = (userId: number) => {
    dispatch(followReducer(userId))
  }


  return (
    <div>
      <UsersSerchForm onFilterChanged={onFilterChanged} />
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            folowingInProgress={folowingInProgress}
            unfollow={unfollow}
            follow={follow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
