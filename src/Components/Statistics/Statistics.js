import React from "react";
import styles  from './Statistics.module.css'

const Statistics = ({statistics}) => {

  return (
    statistics?<div className={styles.statistics}>
      <h2 className={styles.statisticsTitle}>statistics</h2>
      <p>Total Bikes: <span>{statistics.totalQuantityBikes}</span></p>
      <p>Available Bikes: <span>{statistics.avialableBikesQuantity}</span></p>
      <p>Booked Bikes: <span>{statistics.busyBikesQuantity}</span></p>
      <p  className={styles.lastParagraph}>Average bike cost: <span>{statistics.averageCost}</span>UAH/hr.</p>
        </div>:null
  );
  };

export default Statistics;
