import React, { Suspense, useEffect } from "react";
import { updateStatusBike, deleteBike } from "../apiService";

const BikeItem = ({ bike, deleteBikeFromList, getDataStatus }) => {
  const statusVariants = ["Available", "Unavailable", "Busy"];
  const handleChangeStatus = async (id, e) => {
    const status = e.target.value;
    const { data } = await updateStatusBike(id, status);
    if(data){
      getDataStatus(data)
    }
    console.log(data);
  };
  const handleDeleteBike = async (id) => {
    const deleteResult = await deleteBike(id);
    if (deleteResult) {
      deleteBikeFromList(deleteResult.data);
    }
  };
  return (
    <li key={bike._id}>
      <div>
        <p>{bike.name}</p>
        <p>{bike.type}</p>
        <p>{bike.color}</p>
      </div>
      <p>{bike.id}</p>
      <p>status</p>
      <p>{bike.price} UAH/hr.</p>

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
      <button onClick={() => handleDeleteBike(bike._id)}>X</button>
    </li>
  );
};

export default BikeItem;
