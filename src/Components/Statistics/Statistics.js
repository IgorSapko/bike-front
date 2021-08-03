import React from "react";

const Statistics = ({statistics}) => {

  return (
    statistics?<div>
      <p>Total Bikes: {statistics.totalQuantityBikes}</p>
      <p>Available Bikes: {statistics.avialableBikesQuantity}</p>
      <p>Booked Bikes: {statistics.busyBikesQuantity}</p>
      <p>Average bike cost: {statistics.averageCost} UAH/hr.</p>
        </div>:null
  );
  };

export default Statistics;
