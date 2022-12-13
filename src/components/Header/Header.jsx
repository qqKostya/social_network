import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
    </header>
  );
}

export default Header;
