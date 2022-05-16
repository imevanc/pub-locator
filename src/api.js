import axios from "axios";

export const getPubs = async () => {
  try {
    const res = await axios.get("/Pubs/GetPubs");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getImg = async () => {
  try {
    const res = await axios.get("/v1/search", {
      params: {
        query: "scotland",
        per_page: 10,
      },
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    });
    return res.data.photos;
  } catch (error) {
    console.log(error);
  }
};

export const getAddress = async (lat, lng) => {
  console.log(lat);
  try {
    const res = await axios.get("/postcodes", {
      params: {
        lon: `${lng}`,
        lat: `${lat}`,
      },
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    });
    // return res.data;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
