import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { localTime } from "../utils/timeConvarter";
import useEvent from "../api/useEvent";

const EventDetails = () => {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;
  const [event, setEvent] = useState({});
  const [joined, setJoined] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const { id } = useParams();
  const { loadEvent, loading } = useEvent();

  useEffect(() => {
    const fetchData = async () => {
      const loadedData = await loadEvent(id);
      setEvent(loadedData);
      const joinedUser = loadedData?.joined || [];
      setJoined(joinedUser);
      setIsJoined(joinedUser?.includes(userId));
    };
    fetchData();
  }, [id]);

  const updateJoinedInDB = async (newJoined) => {
    if (!currentUser.uid) return;
    try {
      const res = await fetch(`http://localhost:4000/event/${event._id}/join`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ joined: newJoined }),
      });
      if (!res.ok) throw new Error("Failed to update join status");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleJoin = async () => {
    const updated = isJoined
      ? joined.filter((id) => id !== userId)
      : [...joined, userId];

    setJoined(updated);
    setIsJoined(!isJoined);
    await updateJoinedInDB(updated);
  };

  return (
    <section className="py-12 bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-4 ">
        <div className="mb-6 border-1  border-[#0D9488] rounded dark:border-white">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-64 lg:h-96 object-cover rounded"
          />
        </div>

        <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Organize By <span className="font-medium">{event.author?.name}</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Type: {event.eventType} || Location: {event.location}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Date: {localTime(event.date)}
        </p>

        <p className="whitespace-pre-line leading-relaxed text-gray-700 dark:text-gray-200">
          {event.description}
        </p>
        <div className="my-4">
          <button
            onClick={handleJoin}
            className={`inline-block px-4 py-2 rounded ${
              isJoined
                ? "bg-[#0D9488]  text-white"
                : "border border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]  hover:text-white"
            } font-bold w-full transition cursor-pointer`}
          >
            {isJoined ? "Joined" : "Join"}
          </button>
          <p className="text-center mt-2">({joined.length} people joined)</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
