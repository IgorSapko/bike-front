import React, { Suspense, useState, useEffect } from "react";
import styles from "./CreatingComponent.module.css";
import { addBike } from "../../api/apiService";

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
    if (result) {
      const { data } = result;
      if (data.bike) {
        getCreatedBikeAndStatistics(data);
      }
    }

    handleClearState();
  };

  return (
    <div className={styles.creatingComponentWrapprer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ul className={styles.inputsList}>
          {inputNames.map((item) => (
            <li
              key={item}
              className={`${styles.inputsListItem}  ${
                item[0] === "Description" && styles.inputDescr
              }`}
            >
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
        <div className={styles.buttonWrapper}>
        <button className={styles.button} type="submit">
          save
        </button>
        <button className={styles.button} type="reset" onClick={handleClearState}>
          clear
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreatingComponent;
