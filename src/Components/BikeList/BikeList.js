import React, { Suspense, useState, useEffect } from "react";
import BikeItem from "../BikeItem/BikeItem";
import { getBikeCollection } from "../apiService";

const BikeList = ({ data }) => {
  const [bikesList, setBikeList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setBikeList(await getBikeCollection());
    }
    fetchData();
    console.log("useeff");
  }, []);

  const deleteBikeFromList = (bike) => {
    const updatedBikeList = bikesList.filter((elem) => elem._id !== bike._id);
    setBikeList(updatedBikeList);
  };
  const getDataStatus = (bike) => {
    const updatedBokeList = bikesList.map((elem) => {
      if (elem._id === bike._id) {
        return bike;
      }
      return elem;
    });
    setBikeList(updatedBokeList);
  };
  console.log(bikesList);
  data && bikesList.push(data);
  return (
    <ul>
      {bikesList &&
        bikesList.map((elem) => (
          <BikeItem
            key={elem._id}
            bike={elem}
            deleteBikeFromList={deleteBikeFromList}
            getDataStatus={getDataStatus}
          />
        ))}
    </ul>
  );
};

export default BikeList;
