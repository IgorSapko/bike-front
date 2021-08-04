import React, { useState } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import CreatingComponent from "../CreatingComponent/CreatingComponent";
import BikeList from "../BikeList/BikeList";
import Statistics from "../Statistics/Statistics";
import styles from './App.module.css'

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
    <div className={styles.totalWrapper}>
    <Header/>
            <BikeList
        createdBikeAndStatistics={createdBikeAndStatistics}
        getStatistics={getStatistics}
      />
      <CreatingComponent
        getCreatedBikeAndStatistics={getCreatedBikeAndStatistics}
      />
      <Statistics
        createdBikeAndStatistics={createdBikeAndStatistics}
        statistics={statisticsApp}
      />
      <Footer/>
    </div>
  );
};

export default App;
