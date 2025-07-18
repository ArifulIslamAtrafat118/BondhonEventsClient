import { useState } from "react";
import gallery1 from "../assets/gallery/gallery1.jpeg";
import gallery2 from "../assets/gallery/gallery2.webp";
import gallery3 from "../assets/gallery/gallery3.jpeg";
import gallery4 from "../assets/gallery/gallery4.webp";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";

const GallerySection = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section
      className="relative pt-16 pb-2 px-4 md:px-8 text-gray-200 dark:text-white  bg-gradient-to-b from-[#030b41] via-gray-300  to-gray-100 dark:from-[#000000de] dark:via-gray-900  dark:to-gray-700 overflow-hidden"
    
    >
      {/* Top Curve Image */}
      <img
        src="https://web.programming-hero.com/assets/curve-Bvwi6Kir.png"
        alt="curve"
        className="absolute inset-0 top-0 left-0 w-full object-cover opacity-30 pointer-events-none z-0 scale-y-[-1]"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Event Photo Gallery</h2>
        <p className="mb-8 text-lg">
          Glimpses from our latest events — shared moments, shared joy.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4  lg:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg(img)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 md:h-52 lg:h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-lg font-semibold">
                  Click to View
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-red-600 hover:text-white transition z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <img
              src={selectedImg}
              alt="Event"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;



