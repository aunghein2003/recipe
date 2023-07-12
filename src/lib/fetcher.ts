import axios from "axios";

export const getFetcher = async (url: string, params = {}) => {
  try {
    const res = await axios.request({
      method: "GET",
      url: `https://tasty.p.rapidapi.com/${url}`,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RapidAPI_Host,
      },
      params,
    });

    return res.data;
  } catch (err) {
    console.log("Data Fetching error", err);
  }
};
