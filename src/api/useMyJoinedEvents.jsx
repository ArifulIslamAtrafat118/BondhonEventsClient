import { useState, useEffect } from "react";
import useAxiosInterceptor from "../hooks/axiosInterceptro";
import { useAuth } from "../context/AuthContext";

const useMyJoinedEvents = () => {
  const [loading, setLoading] = useState(true);
  const [MyJoinedEvents, setMyJoinedEvents] = useState([]);
  const axiosSecure = useAxiosInterceptor();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser?.uid) return;

    const run = async () => {
      try {
        const res = await axiosSecure.get(`/joined-events/${currentUser.uid}?email=${currentUser.email}`);
        setMyJoinedEvents(res.data);
      } catch (error) {
        console.error("Failed to fetch Events", error);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [axiosSecure, currentUser]);

  return { MyJoinedEvents, loading };
};

export default useMyJoinedEvents;
