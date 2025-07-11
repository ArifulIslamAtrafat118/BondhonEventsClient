import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1  bg-gradient-to-b from-green-50 to-green-200 dark:from-gray-700 dark:to-gray-800 dark:bg-gray-900 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
