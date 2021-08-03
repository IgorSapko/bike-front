import React, { Suspense, useState, useEffect } from "react";
import styles from "./CreatingComponent.module.css";
import { addBike } from "../apiService";

const CreatingComponent = ({ getCreatedBikeAndStatistics }) => {
  const initialState = {
    name: "",
    type: "",
    color: "",
    wheelSize: "",
    price: "",
    id: "",
    description: "",
  };
  const [state, setState] = useState(initialState);
  const inputNames = [
    ["Name", "name"],
    ["Type", "type"],
    ["Color", "color"],
    ["Wheel size", "wheelSize"],
    ["Price", "price"],
    ["ID (slug): ХХХХХХХХХХХХХ", "id"],
    ["Description", "description"],
  ];

  const handleClearState = () => {
    setState(initialState);
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addBike(state);
    if(result){const {data} = result
    if (data.bike) {
      getCreatedBikeAndStatistics(data);
    }}
    
    handleClearState();
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ul className={styles.inputsList}>
          {inputNames.map((item) => (
            <li key={item}>
              <input
                className={styles.input}
                type="text"
                placeholder={item[0]}
                name={item[1]}
                onChange={handleChange}
                value={state[item[1]]}
              />
            </li>
          ))}
        </ul>
        <button className="button" type="submit">
          save
        </button>
        <button className="button" type="reset" onClick={handleClearState}>
          clear
        </button>
      </form>
    </div>
  );
};

export default CreatingComponent;