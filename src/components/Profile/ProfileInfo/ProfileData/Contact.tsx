import React from 'react'
import styles from "../ProfileInfo.module.css";

type PropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<PropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <i>{contactTitle}: </i>
      {contactValue}
    </div>
  );
};

export default Contact