import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { localTime } from "../utils/timeConvarter";
import useManageEvents from "../api/useManageEvents";

function ManageEvents() {
  // const [myEvents, setMyEvents] = useState([]);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { myEvents, loading, errorMessage, removeEvents } = useManageEvents();

  console.log(myEvents, loading, errorMessage);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:4000/event/delete/${id}`, {
            method: "DELETE",
          });

          if (!res.ok) {
            throw new Error(`Delete failed with status ${res.status}`);
          } else {
            removeEvents(id);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          //   console.error("Delete error:", error.message);

          toast.error(error?.message || "Some thing went wrong.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    });
  };

  return (
    <section className="py-12 bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          {" "}
          Events by You
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
            <div className="skeleton bg-gray-200 dark:bg-gray-700  h-52 md:h-72 w-[100%]"></div>
          </div>
        ) : errorMessage ? (
          <p className="text-center text-xl lg:text-2xl py-24 text-red-700 mb-4">
            {errorMessage}
          </p>
        ) : myEvents.length === 0 ? (
          <p className="text-center text-2xl md:text-3xl xl:text-4xl text-gray-500">
            You haven't added any events yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {myEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition "
              >
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full md:w-1/3 lg:w-full xl:w-1/3 object-cover h-72 md:h-auto lg:h-72 xl:h-auto"
                  />
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Date:{" "}
                      <span className="font-medium">
                        {localTime(event.date)}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Type:{" "}
                      <span className="font-medium">{event.eventType}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Joined:{" "}
                      <span className="font-medium">
                        {event.joined?.length || 0}
                      </span>
                    </p>
                    <p className="text-sm hidden md:block lg:hidden xl:block text-gray-600 dark:text-gray-300">
                      Fee:{" "}
                      <span className="font-medium">{event.fee || "Free"}</span>
                    </p>
                    <p className="text-sm mb-3 line-clamp-2 md:line-clamp-3 lg:line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex gap-4 justify-end items-center">
                      <button
                        onClick={() => navigate(`/event/update/${event._id}`)}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        title="Edit event"
                      >
                        <FaEdit />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        title="Delete Event"
                      >
                        <FaTrash />
                      </button>

                      {/* View Details */}
                      <Link
                        to={`/event-details/${event._id}`}
                        title="See Details"
                      >
                        <FaEye className="text-green-500 hover:text-green-700" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ManageEvents;
