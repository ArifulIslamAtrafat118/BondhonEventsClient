import { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router";
import { FaThList, FaTh } from "react-icons/fa";
import { localTime } from "../utils/timeConvarter";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col xl:flex-row">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-64 xl:h-auto xl:w-3/7 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Location:{" "}
                      <span className="font-medium">{event.location}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Type:{" "}
                      <span className="font-medium">{event.eventType}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Date:{" "}
                      <span className="font-medium">{localTime(event.date)}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Joined:{" "}
                      <span className="font-medium">
                        {event.joined?.length || 0}
                      </span>
                    </p>
                    <p className="text-sm mb-3 line-clamp-4">
                      {event.description?.slice(0, 80)}...
                    </p>
                    <div className="flex justify-end">
                      <Link to={`/event-details/${event._id}`} key={event._id}>
                        <button className=" text-[#0D9488] border border-[#0D9488] px-4 py-1 rounded hover:bg-[#0D9488] hover:text-white transition cursor-pointer">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Table View
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-green-100 dark:bg-gray-700">
                  <th className="text-left px-4 py-2">Image</th>
                  <th className="text-left px-4 py-2">Title</th>
                  <th className="text-left px-4 py-2">Type</th>
                  <th className="text-left px-4 py-2">Joined</th>
                  <th className="text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event) => (
                  <tr key={event._id} className="border-t dark:border-gray-700">
                    <td className="px-4 py-2">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{event.title}</td>
                    <td className="px-4 py-2">{event.eventType}</td>
                    <td className="px-4 py-2">{event.joined?.length || 0}</td>
                    <td className="px-4 py-2">
                      <Link
                        to={`/event-details/${event._id}`}
                        className=" hover:text-[#0D9488]"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
export default UpcomingEvents;
