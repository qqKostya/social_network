import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <NavLink
      to={`/dialogs/${props.id}`}
      className={classes.dialog + " " + classes.active}
    >
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
