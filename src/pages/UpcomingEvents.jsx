import { useState } from "react";
import { useLoaderData } from "react-router";
import { FaThList, FaTh } from "react-icons/fa";
import TableView from "../utils/TableView";
import CardView from "../utils/CardView";

const UpcomingEvents = () => {
  const events = useLoaderData();
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("card");

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.eventType === filter);

  return (
    <section className="py-12 bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl  md:text-3xl mb-5 lg:mb-9  xl:text-4xl font-bold text-center ">
          Upcoming Events
        </h2>
        <div className="flex  items-center justify-between mb-6">
          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#0D9488] cursor-pointer"
          >
            {[
              "All",
              "Cleanup",
              "Plantation",
              "Awareness Campaign",
              "Health Camp",
              "Donation",
              "Food Distribution",
              "Others",
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

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
          {
            /*Table View */
          }(<TableView filteredEvents={filteredEvents} />)
        )}
      </div>
    </section>
  );
};
export default UpcomingEvents;
