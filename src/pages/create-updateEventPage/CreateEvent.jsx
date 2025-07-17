import { useNavigate } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import "../../index.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

const CreateEvent = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    eventType: "",
    fee: "",
    description: "",
    imageUrl: "",
    date: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = {
      ...formData,
      date: formData.date?.toISOString(),
      author: {
        uid: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
      },
      joined: [],
    };
    console.log(eventData)
    const res = await fetch("http://localhost:4000/create-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (res.ok) {
      navigate("/manage-events")
      toast.success("Event created successfully!", { position: "top-center" });
      setFormData({
        title: "",
        location: "",
        eventType: "",
        fee: "",
        description: "",
        imageUrl: "",
        date: null,
      });
    }
  };

  const handleBack = () => navigate(-1);

  return (
    <section className="min-h-[90vh] bg-[#F1F5F9] dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleBack}
          className="mb-6 inline-block text-[#0D9488] border border-[#0D9488] px-4 py-1.5 rounded hover:bg-[#0D9488] hover:text-white transition"
        >
          ← Back
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          ➕ Create A New Event
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
            className="input"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="input"
          />

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="" disabled>Select Event Type</option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Awareness Campaign</option>
            <option>Health Camp</option>
            <option>Donation</option>
            <option>Food Distribution</option>
            <option>Others</option>
          </select>

          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            placeholder="Joining Fee (optional)"
            className="input"
          />

          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Thumbnail Image URL"
            required
            className="input md:col-span-2"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write event details..."
            required
            minLength="50"
            className="input md:col-span-2 h-32"
          ></textarea>

          <div>
            <label className="block text-sm mb-1">Event Date</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              className="input w-full bg-gray-100 dark:bg-gray-700"
              placeholderText="Select Event date"
              minDate={new Date()}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={currentUser.displayName}
              readOnly
              className="input bg-gray-100 dark:bg-gray-700"
            />
            <input
              type="email"
              value={currentUser.email}
              readOnly
              className="input bg-gray-100 dark:bg-gray-700"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-[#0D9488] dark:bg-[#14B8A6] text-white py-2 px-6 rounded hover:bg-[#409e96] transition cursor-pointer"
          >
            Submit Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
