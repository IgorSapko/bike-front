import React, { Suspense, useState, useEffect } from "react";
import BikeItem from "../BikeItem/BikeItem";
import { getBikeCollection } from "../../api/apiService";
import styles from "./BikeList.module.css";

const BikeList = ({ createdBikeAndStatistics, getStatistics }) => {
  const [bikeCollectionAndStatistics, setBikeCollectionAndStatistics] =
    useState({});
  useEffect(() => {
    async function fetchData() {
      const bikeCollectionAndStatistics = await getBikeCollection();
      setBikeCollectionAndStatistics(bikeCollectionAndStatistics);
      getStatistics(bikeCollectionAndStatistics.statistics);
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (createdBikeAndStatistics) {
      setBikeCollectionAndStatistics((prev) => {
        prev.bikes.push(createdBikeAndStatistics.bike);
        return {
          bikes: [...prev.bikes],
          statistics: createdBikeAndStatistics.statistics,
        };
      });
      getStatistics(createdBikeAndStatistics.statistics);
    }
  }, [createdBikeAndStatistics]);

  const deleteBikeFromList = (data) => {
    const updatedBikeList = bikeCollectionAndStatistics.bikes.filter(
      (elem) => elem._id !== data.bike._id
    );
    setBikeCollectionAndStatistics({
      bikes: updatedBikeList,
      statistics: data.statistics,
    });
    getStatistics(data.statistics);
  };
  const getDataStatus = (data) => {
    const updatedBikeList = bikeCollectionAndStatistics.bikes.map((elem) => {
      if (elem._id === data.bike._id) {
        return data.bike;
      }
      return elem;
    });
    setBikeCollectionAndStatistics({
      bikes: updatedBikeList,
      statistics: data.statistics,
    });
    getStatistics(data.statistics);
  };
  return (
    <ul className={styles.bikeList}>
      {bikeCollectionAndStatistics.bikes &&
        bikeCollectionAndStatistics.bikes.map((elem) => (
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
