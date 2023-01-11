import React from 'react'
import styles from "../ProfileInfo.module.css";

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <i>{contactTitle}: </i>
      {contactValue}
    </div>
  );
};

export default Contact