import axios from "axios";

const URL = "https://bike-back.herokuapp.com/";
export const getBikeCollection = async () => {
  const { data } = await axios.get(URL);
  return data
  };
  export const addBike = async (bikeItem) => {
    const bike = await axios.post(URL, bikeItem);
    return bike
    };
    export const updateStatusBike = async (id, status) => {
      const bike = await axios.patch(URL, id, status);
      return bike
      };
    export const deleteBike = async (id) => {
      const { data } = await axios.delete(URL, id);
      return data
      };