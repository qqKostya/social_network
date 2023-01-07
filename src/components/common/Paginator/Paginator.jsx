import React from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => (
        <span
          className={props.currentPage === page && styles.selectedPage}
          onClick={() => {
            props.onPageChanged(page);
          }}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
