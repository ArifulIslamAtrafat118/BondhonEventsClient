import { useEffect, useState } from "react";
import { FaThList, FaTh } from "react-icons/fa";
import TableView from "../utils/TableView";
import CardView from "../utils/CardView";
import { useAuth } from "../context/AuthContext";

const UpcomingEvents = () => {
  const [filteredEvents, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser?.uid) return;

    const fetchmyJoinedEvents = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/joined-events/${currentUser.uid}`
        );

        if (!res.ok) {
          if (res.status === 401) {
            setErrorMessage("Unauthorized access. Please login again.");
            logout();
            showToast();
            navigate("/sign-in");
          } else if (res.status === 403) {
            setErrorMessage("Forbidden access. Please login again.");
            logout();
            showToast();
            navigate("/sign-in");
          } else if (res.status >= 500) {
            setErrorMessage(`Server error: ${res.status}`);
          } else {
            setErrorMessage("Something went wrong.");
          }
          return;
        }

        const data = await res.json();
        setEvents(data);
      } catch (e) {
        console.error("Fetch error:", e);
        setErrorMessage("Something went wrong while loading your data.");
      } finally {
        setLoading(false);
      }
    };

    fetchmyJoinedEvents();
  }, [currentUser?.uid]);


  return (
    <section className="py-12 bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl  md:text-3xl mb-5 lg:mb-9  xl:text-4xl font-bold text-center ">
          Joined Events
        </h2>
        <div className="flex  items-center justify-end mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("card")}
              className={` ${
                viewMode === "card"
                  ? "text-green-500"
                  : "text-gray-700 dark:text-white"
              }`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`${
                viewMode === "table"
                  ? "text-green-500"
                  : "text-gray-700 dark:text-white"
              }`}
            >
              <FaThList />
            </button>
          </div>
        </div>

        {/* Card View */}
        {filteredEvents.length === 0 ? (
          <p className="text-center text-red-500">No events found.</p>
        ) : viewMode === "card" ? (
          <CardView filteredEvents={filteredEvents} />
        ) : (
          <TableView filteredEvents={filteredEvents} />
        )}
      </div>
    </section>
  );
};
export default UpcomingEvents;
