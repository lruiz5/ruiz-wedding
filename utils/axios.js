import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    params: {
      token: process.env.NEXT_PUBLIC_API_TOKEN,
      version: "draft",
    },
    timeout: 5000,
  });
};
