import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosInterceptor = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use((config) => {
      if (currentUser?.accessToken) {
        config.headers.Authorization = `Bearer ${currentUser.accessToken}`;
      }
      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [currentUser]);

  return axiosInstance;
};

export default useAxiosInterceptor;
