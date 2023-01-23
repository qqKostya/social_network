import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

type PropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
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
