import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.headerText}>ADMIN.BIKE-BOOKING.COM</p>
    </div>
  );
};

export default Header;
