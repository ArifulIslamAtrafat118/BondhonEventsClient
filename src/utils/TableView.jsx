import React from "react";
import { localTime } from "./timeConvarter";
import { Link } from "react-router";

function TableView({ filteredEvents }) {
  return (
    // Table View
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <thead>
          <tr className="bg-green-100 dark:bg-gray-700">
            <th className="text-left px-4 py-2">Image</th>
            <th className="text-left px-4 py-2">Title</th>
            <th className="text-left px-4 py-2">Type</th>
            <th className="text-left px-4 py-2">Date</th>
            <th className="text-left px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents?.map((event) => (
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
              <td className="px-4 py-2">{localTime(event.date)}</td>
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
  );
}

export default TableView;
