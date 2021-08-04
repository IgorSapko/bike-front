import axios from "axios";

const URL = "https://bike-back.herokuapp.com/";
// const URL = "http://localhost:8080/";
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
    const addedBikeAndStatistics = await axios.post(URL, bikeItem);
    return addedBikeAndStatistics;
  } catch (error) {
    alert(error);
  }
};
export const updateStatusBike = async (id, status) => {
  try {
    const updatedBikeAndStatistics = await axios.patch(URL, { id, status });
    return updatedBikeAndStatistics;
  } catch (error) {
    alert(error);
  }
};
export const deleteBike = async (id) => {
  try {
    const deletedBikeAndStatistics = await axios.delete(URL, { data: { id } });
    return deletedBikeAndStatistics;
  } catch (error) {
    alert(error);
  }
};
