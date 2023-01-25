import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UsersType } from "../../types/types"
import UsersSerchForm from "./UsersSerchForm";
import { FilterType } from "../../redux/users-reducer";

type PropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
  totalUsersCount: number
  pageSize: number
  folowingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  users: Array<UsersType>
}

const Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, folowingInProgress, unfollow, follow, users, onFilterChanged }) => {
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
