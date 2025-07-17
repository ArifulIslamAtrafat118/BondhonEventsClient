import React, { use, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useAxiosInterceptor from "../hooks/axiosInterceptro";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function useEvent() {
  const [loading, setLoading] = useState(true);
  const axios = useAxiosInterceptor();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const loadEvent = async (id) => {
    try {
      const res = await axios.get(
        `/event-details/${id}?email=${currentUser.email}`
      );
      if (res.status === 200) {
        return await res.data;
      }
    } catch (error) {
      // console.log(error);
      toast.error(
        `${error?.message ? error.message : "Something Went Wrong!"}`
      );
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (id, eventData) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/update-events/${id}?email=${currentUser.email}`,
        eventData
      );

      if (res.status === 200) {
        navigate("/manage-events");
        toast.success("Event updated successfully!", {
          position: "top-center",
        });
      }
      return res;
    } catch (error) {
      // console.log(error);
      toast.error(
        `${error?.message ? error.message : "Something Went Wrong!"}`
      );
    }finally{
      setLoading(false);
    }
  };
  return { loadEvent, loading, updateEvent };
}

export default useEvent;
