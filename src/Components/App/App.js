import React, { Suspense, useEffect, useState, useContext, createContext } from "react";
import CreatingComponent from "../CreatingComponent/CreatingComponent";
import BikeList from "../BikeList/BikeList"; 
import {DataProvider} from '../DataContext'

const App = () => {
  const [data, setData] = useState(null);
  
  const getData = (data) => {
    console.log(data);
    setData(data);
  };
  return (
    <DataProvider>
      <CreatingComponent getData={getData} />
      <BikeList data={data} />
    </DataProvider>
  );
};

export default App;
