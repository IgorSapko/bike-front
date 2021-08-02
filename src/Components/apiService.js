import axios from "axios";

// const URL = "https://bike-back.herokuapp.com/";
const URL = "http://localhost:8080/";
export const getBikeCollection = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    alert(error);
  }
};
export const addBike = async (bikeItem) => {
  try {
    const bike = await axios.post(URL, bikeItem);
    return bike;
  } catch (error) {
    alert(error);
  }
};
export const updateStatusBike = async (id, status) => {
  try {
    const bike = await axios.patch(URL, { id, status });
    return bike;
  } catch (error) {
    alert(error);
  }
};
export const deleteBike = async (id) => {
  try {
    const bike = await axios.delete(URL, { data: { id } });
    return bike;
  } catch (error) {
    alert(error);
  }
};
