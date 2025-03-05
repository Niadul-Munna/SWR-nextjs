import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const fetcher = (url: string) => {
  axiosInstance.get(url).then((res) => res.data);
};

export default fetcher;
