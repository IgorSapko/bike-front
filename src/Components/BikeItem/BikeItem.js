import React from "react";
import { updateStatusBike, deleteBike } from "../../api/apiService";
import styles from "./BikeItem.module.css";

const BikeItem = ({ bike, deleteBikeFromList, getDataStatus }) => {
  const statusVariants = ["Available", "Unavailable", "Busy"];
  const handleChangeStatus = async (id, e) => {
    const status = e.target.value;
    const result = await updateStatusBike(id, status);
    if (result) {
      const { data } = result;
      if (data.bike) {
        getDataStatus(data);
      }
    }
  };
  const handleDeleteBike = async (id) => {
    const { data } = await deleteBike(id);
    if (data.bike) {
      deleteBikeFromList(data);
    }
  };
  return (
    <li
      key={bike._id}
      className={`
        ${styles.bikeItem} ${
        bike.status === "Available"
          ? styles.available
          : bike.status === "Busy"
          ? styles.busy
          : styles.unavailable
      }`}
    >
      <div className={styles.wrapperLeft}>
        <p className={styles.name}> {bike.name}</p>
        <span>-</span>
        <p>{bike.type}</p>
        <p>{bike.color}</p>

        <p className={styles.id}>{bike.id}</p>
        <p className={styles.status}>status:</p>
        <select onChange={(e) => handleChangeStatus(bike._id, e)}>
          <option
            key={bike._id + bike.status}
            value={bike.status}
            name={bike.status}
          >
            {bike.status}
          </option>
          {statusVariants.map((elem) => {
            if (elem !== bike.status) {
              return (
                <option key={bike._id + elem} value={elem} name={elem}>
                  {elem}
                </option>
              );
            }
          })}
        </select>
      </div>
      <div className={styles.wrapperRight}>
        <button
          onClick={() => handleDeleteBike(bike._id)}
          className={styles.button}
        ></button>
        <p className={styles.price}>{bike.price} UAH/hr.</p>
      </div>
    </li>
  );
};

export default BikeItem;
