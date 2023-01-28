import React, { useEffect } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSerchForm from "./UsersSerchForm";
import { FilterType, getUsers, follow as followReducer, unfollow as unfollowReducer } from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFolowingInProgress, getPageSize, getTotalUsersCount, getUsersFilter, getUsersSuperSelector } from "../../redux/users-selectors";
import { AppDispatch } from "../../redux/redux-store";
import { useSearchParams } from "react-router-dom";

type PropsType = {}

const Users: React.FC<PropsType> = () => {

  const users = useSelector(getUsersSuperSelector)
  const folowingInProgress = useSelector(getFolowingInProgress)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)

  const dispatch: AppDispatch = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams()


  useEffect(() => {

    const result: any = {}
    // @ts-ignore
    for (const [key, value] of searchParams.entries()) {
      let value2: any = +value
      if (isNaN(value2)) {
        value2 = value
      }
      if (value === 'true') {
        value2 = true
      } else if (value === 'false') {
        value2 = false
      }
      result[key] = value2
    }

    let actualPage = result.page || currentPage
    let term = result.term || filter.term

    let friend = result.friend || filter.friend
    if (result.friend === false) {
      friend = result.friend
    }

    const actualFilter = { friend, term }

    dispatch(getUsers(actualPage, pageSize, actualFilter))

    // eslint-disable-next-line
  }, [])


  useEffect(() => {

    const term = filter.term
    const friend = filter.friend

    let urlQuery =
      (term === '' ? '' : `&term=${term}`)
      + (friend === null ? '' : `&friend=${friend}`)
      + (currentPage === 1 ? '' : `&page=${currentPage}`)

    setSearchParams(urlQuery)

    // eslint-disable-next-line
  }, [filter, currentPage])

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
