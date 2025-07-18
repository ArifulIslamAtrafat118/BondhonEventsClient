import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ErrorPage() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-sky-50 to-sky-200 dark:from-gray-900  dark:via-gray-800 dark:to-gray-800 px-6 py-12">
      <div className="max-w-3xl w-full text-center">
       
        <div className="relative w-full h-64 sm:h-80 md:h-96 mx-auto mb-8">
          <svg
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0,200 Q150,100 400,200 T800,200 L800,400 L0,400 Z"
              fill="#38bdf8"
              opacity="0.15"
            />
            <circle cx="400" cy="200" r="90" fill="#0ea5e9" />
            <text
              x="400"
              y="210"
              textAnchor="middle"
              fontSize="80"
              fontWeight="bold"
              fill="white"
            >
              404
            </text>
          </svg>
        </div>

        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Page Not Found
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

       
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg hover:scale-105 transform transition"
        >
          ⬅️ Go Back Home
        </Link>
      </div>
    </div>
  );
}
