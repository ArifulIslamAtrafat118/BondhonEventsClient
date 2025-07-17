import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Lottie from "lottie-react";
import gardenAnim from "../../assets/animations/garden.json";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { errorToast } from "./SignIn";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const { currentUser, signup, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signup(formData.email, formData.password);
      await updateProfile(userCredential.user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "Your account regester succssful",
        timer: 800,
        draggable: true,
      });
      location?.state?.pathname
        ? navigate(location?.state?.pathname)
        : navigate("/");
    } catch (error) {
      errorToast(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      location?.state.pathname
        ? navigate(location?.state.pathname)
        : navigate("/");

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
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[90vh] flex items-center justify-center bg-stone-200 dark:bg-gray-900 px-4"
    >
      <Lottie
        animationData={gardenAnim}
        loop={true}
        className="absolute inset-0 w-full h-[100vh] object-cover opacity-60 dark:opacity-20 pointer-events-none"
      />
      <div className=" bg-green-300/10  p-8 rounded-lg shadow-lg max-w-md w-full relative overflow-hidden">
        <div className="absolute -top-24 -right-20 opacity-10 pointer-events-none w-[300px]"></div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Create Account 🌱
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 text-black input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 text-black input"
            required
          />
          <input
            type="url"
            name="photoURL"
            placeholder="Photo URL"
            value={formData.photoURL}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 text-black input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 text-black input"
            required
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
            title="Must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 special character"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-2 rounded mt-3 cursor-pointer"
        >
          Sign up with Google
        </button>
        <p className="text-sm mt-4 text-center text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-green-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
