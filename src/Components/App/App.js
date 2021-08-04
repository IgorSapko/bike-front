import React, { useState, Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreatingComponent from "../CreatingComponent/CreatingComponent";
import BikeList from "../BikeList/BikeList";
import Statistics from "../Statistics/Statistics";
import Loader from '../Loader/Loader';
import styles from "./App.module.css";

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
      <Header />
      <Suspense fallback={<Loader onLoad={true} />}>
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
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
