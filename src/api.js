import axios from "axios";

export const getPubs = async () => {
  try {
    const res = await axios.get("/Pubs/GetPubs");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
