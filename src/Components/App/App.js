import React, { useState } from "react";
import CreatingComponent from "../CreatingComponent/CreatingComponent";
import BikeList from "../BikeList/BikeList";
import Statistics from "../Statistics/Statistics";

const App = () => {
  const [createdBikeAndStatistics, setСreatedBikeAndStatistics] =
    useState(null);
  const [statisticsApp, setStatisticsApp] = useState(null);

  const getCreatedBikeAndStatistics = (data) => {
    setСreatedBikeAndStatistics(data);
  };
  const getStatistics = (statistics) => {
    setStatisticsApp(statistics);
  };
  return (
    <>
      <CreatingComponent
        getCreatedBikeAndStatistics={getCreatedBikeAndStatistics}
      />
      <BikeList
        createdBikeAndStatistics={createdBikeAndStatistics}
        getStatistics={getStatistics}
      />
      <Statistics
        createdBikeAndStatistics={createdBikeAndStatistics}
        statistics={statisticsApp}
      />
    </>
  );
};

export default App;
