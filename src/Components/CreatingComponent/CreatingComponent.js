import { stat } from "@nodelib/fs.stat";
import React, { Suspense, useState, useEffect } from "react";
import styles from "./CreatingComponent.module.css";
import { getBikeCollection, addBike } from "../apiService";

const CreatingComponent = ({ getData }) => {
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
  console.log(state);
  const inputNames = [
    "Name",
    "Type",
    "Color",
    "Wheel size",
    "Price",
    "ID (slug): ХХХХХХХХХХХХХ",
    "Description",
  ];

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "Name":
        setState((prevState) => {
          return { ...prevState, name: value };
        });
        break;
      case "Type":
        setState((prevState) => {
          return { ...prevState, type: value };
        });
        break;
      case "Color":
        setState((prevState) => {
          return { ...prevState, color: value };
        });
        break;
      case "Wheel size":
        setState((prevState) => {
          return { ...prevState, wheelSize: value };
        });
        break;
      case "Price":
        setState((prevState) => {
          return { ...prevState, price: value };
        });
        break;
      case "ID (slug): ХХХХХХХХХХХХХ":
        setState((prevState) => {
          return { ...prevState, id: value };
        });
        break;
      case "Description":
        setState((prevState) => {
          return { ...prevState, description: value };
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getData(state);
    const resultAdd = await addBike(state);
    // getBikeCollection();

    setState(initialState);
  };

  const handleClearState = () => {
    setState(initialState);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ul className={styles.inputsList}>
          {inputNames.map((item, ind) => (
            <li key={item}>
              <input
                className={styles.input}
                type="text"
                placeholder={item}
                name={item}
                //   value={arrStateValues[ind]}
                onChange={handleChange}
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
