import React, { useEffect, useState } from "react";
import useAxiosInterceptor from "../hooks/axiosInterceptro";
import { useAuth } from "../context/AuthContext";

function useManageEvents() {
  const [loading, setLoading] = useState(true);
  const [myEvents, setMyEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const axios = useAxiosInterceptor();
  const { currentUser } = useAuth();
  useEffect(() => {
    if (!currentUser) return;
    const ManageEventsData = async () => {
      try {
        const res = await axios.get(`/manage-my-events/${currentUser.uid}?email=${currentUser.email}`);
        setMyEvents(res.data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally{
        setLoading(false)
      }
    };
    ManageEventsData();
  }, [axios, currentUser]);
  const removeEvents = (id)=>{
    setMyEvents((prev) => prev.filter((event) => event._id !== id));

  }
  return { myEvents, loading, errorMessage ,removeEvents };
}

export default useManageEvents;
