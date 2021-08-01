import React, { Suspense, useEffect, useState } from "react";
import CreatingComponent from "../CreatingComponent/CreatingComponent";
import BikeList from "../BikeList/BikeList";

const App = () => {
  const [data, setData] = useState({});
  const getData = (data) => {
    console.log(data);
    setData(data);
  };
  return (
    <>
      <CreatingComponent getData={getData} />
      <BikeList data={data} />
    </>
  );
};

export default App;
