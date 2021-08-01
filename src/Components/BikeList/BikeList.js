import React, { Suspense, useState, useEffect } from "react";
import BikeItem from "../BikeItem/BikeItem";
import { getBikeCollection, addBike } from "../apiService";

const BikeList = ({ data }) => {
  const [bikesList, setBikeList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setBikeList(await getBikeCollection());
    }
    fetchData();
    console.log("useeff");
  }, []);
  console.log(bikesList);
  return (
    <ul>
      {/* data. */}
      {bikesList && bikesList.map((elem) => <BikeItem bike={elem} />)}
    </ul>
  );
};

export default BikeList;
