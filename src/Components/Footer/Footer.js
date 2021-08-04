import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTextDeveloper}>Developer: </p>
      <p className={styles.footerTextName}>Igor Sapko </p>
    </footer>
  );
};

export default Footer;
