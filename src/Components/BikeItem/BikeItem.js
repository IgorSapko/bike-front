import React, { Suspense, useEffect } from "react";

const BikeItem = ({ bike }) => {
  const statusVariants = ["Available", "Unavailable", "Busy"];
  const handleChangeStatus = (id, e) => {
    console.log(id);
    console.log(e.target.value);
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
    </li>
  );
};

export default BikeItem;
