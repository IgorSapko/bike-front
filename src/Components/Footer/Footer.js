import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerTextDeveloper}>Developer: </p>
      <p className={styles.footerTextName}>Igor Sapko </p>
    </div>
  );
};

export default Footer;
