import React from "react";
import { localTime } from "./timeConvarter";
import { Link } from "react-router";

function CardView({ filteredEvents }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {filteredEvents?.map((event) => (
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
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Location: <span className="font-medium">{event.location}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Type: <span className="font-medium">{event.eventType}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Date:{" "}
                <span className="font-medium">{localTime(event.date)}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Joined:{" "}
                <span className="font-medium">{event.joined?.length || 0}</span>
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
  );
}

export default CardView;
