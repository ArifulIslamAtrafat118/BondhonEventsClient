import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoute";
import LoadingSpinner from "./utils/LoadingSpinner";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
