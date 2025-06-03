import axios from "axios";

const UseAxiosPublic = () => {
  const axiosPublic = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://bd-master-developer-server.vercel.app",
    // baseURL: "https://api.bdmasterdeveloper.com",
  });

  return axiosPublic;
};

export default UseAxiosPublic;
