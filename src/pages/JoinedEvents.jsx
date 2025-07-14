import { Suspense, useEffect, useState } from "react";
import { FaThList, FaTh } from "react-icons/fa";
import TableView from "../utils/TableView";
import CardView from "../utils/CardView";
import useMyJoinedEvents from "../api/useMyJoinedEvents";
import LoadingSpinner from "../utils/LoadingSpinner";

const JoinedEvents = () => {
  const { MyJoinedEvents, loading } = useMyJoinedEvents();
  const filteredEvents = MyJoinedEvents;
  console.log(filteredEvents);
  const [viewMode, setViewMode] = useState("table");

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

        {loading ? (
          <LoadingSpinner />
        ) : filteredEvents.length === 0 ? (
          <p className="text-center text-red-500">No events found.</p>
        ) : viewMode === "card" ? (
          <CardView filteredEvents={filteredEvents} />    //Card View
        ) : (
          <TableView filteredEvents={filteredEvents} />   //Table View
        )}
      </div>
    </section>
  );
};
export default JoinedEvents;
