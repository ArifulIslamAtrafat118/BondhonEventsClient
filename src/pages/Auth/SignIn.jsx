import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import gardenAnim from "../../assets/animations/garden.json";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import useSwalTheme from "../../hooks/useSwalTheme";
export const errorToast = (error) =>
  toast.error(`${error?.message}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, googleSignIn, login } = useAuth();
  const { SwalTheme } = useSwalTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser) navigate(-1 || "/");
  }, [currentUser]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      Swal.fire({
        icon: "success",
        text: "Sign-In to Bondhon Events successful.",
        timer: 800,
        title: "Congratulaions!",
        ...SwalTheme,
      }).then(() => {
        location.state ? navigate(location.state) : navigate("/");
      });
    } catch (error) {
      console.log("console error", error.message);
      toast.error("Login failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Wellcome to Bondhon Events!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      location.state ? navigate(location?.state) : navigate('/');
    } catch (error) {
      errorToast(error);
    }
  };

  if (!currentUser) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen  flex items-center justify-center bg-green-50 dark:bg-gray-900 px-4 overflow-hidden"
      >
        <Lottie
          animationData={gardenAnim}
          loop={true}
          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
        />
        <div className="relative z-10 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
            Welcome Back
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded cursor-pointer"
            >
              Sign In
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 rounded mt-3 cursor-pointer"
          >
            Sign in with Google
          </button>
          <p className="text-sm mt-4 text-center text-gray-700 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/sign-up"
              state={location.state}
              className="text-green-600 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    );
  }
};

export default SignIn;
