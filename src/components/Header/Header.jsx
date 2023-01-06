import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo" />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
