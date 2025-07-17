import React from "react";

function useSwalTheme() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const SwalTheme = {
    background: isDarkMode ? "#1f2937" : "#fff",
    color: isDarkMode ? "#e5e7eb" : "#111827",
    iconColor: isDarkMode ? "#10b981" : "#10b981",
    customClass: {
      popup: "rounded-xl shadow-lg",
      title: "text-lg font-semibold",
      confirmButton: isDarkMode
        ? "bg-emerald-600 text-white hover:bg-emerald-700"
        : "bg-emerald-500 text-white hover:bg-emerald-600",
    },
  };

  return { SwalTheme };
}

export default useSwalTheme;
