import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaThList, FaTh } from "react-icons/fa";
import TableView from "../utils/TableView";
import CardView from "../utils/CardView";
import useSearchEvents from "../api/useSearchEvents";

const UpcomingEvents = () => {
  const [loading, setLaoding] = useState(true);
  const [events, setEvents] = useState(useLoaderData());
  const [searchBy, setSearchBy] = useState("");
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("card");
  const { search } = useSearchEvents();

  useEffect(() => {
    if (events) {
      setLaoding(false);
    }
  }, [events]);


  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.eventType === filter);
  const handleSearch = async(e) => {
    const value = e.target.value
    setSearchBy(value);
    // console.log(e.target.value);
    const searchResult =await search(value);
    setEvents(searchResult)
    console.log(searchResult);
    
  };
  // console.log(searchBy);
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

          <label className="input md:max-w-[20rem] max-w-xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearch}
              type="text"
              value={searchBy}
              required
              placeholder="Search"
              name="search"
            />
          </label>

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

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
          </div>
        ) : filteredEvents?.length === 0 ? (
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
