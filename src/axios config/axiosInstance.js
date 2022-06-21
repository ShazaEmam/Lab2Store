import axios from "axios";
import store from '../store/store';
import { changeLoader } from "../store/actions/loader";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",

});

axiosInstance.interceptors.request.use(function (config) 
  {
    store.dispatch(changeLoader(true));
    
    return config;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use( function (response)
 {
    store.dispatch(changeLoader(false));
    return response;
  },
  function (error) {
    
    return Promise.reject(error);
  });

export default axiosInstance;
