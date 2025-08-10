import React from "react";
import useAxiosInterceptor from "../hooks/axiosInterceptro";

function useSearchEvents() {
    const axios = useAxiosInterceptor();
  const search = async (searchBy) => {
    const res= await axios.get(`/search?search=${searchBy}`)
    //   const data = await res.json();
      return res.data;
  };
  return { search };
}

export default useSearchEvents;
