import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import useAxiosInterceptor from "./axiosInterceptro";

function useDeleteEvents(removeEvents) {
  const axios = useAxiosInterceptor();
  const { currentUser } = useAuth();
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
          const res = await axios.delete(
            `http://localhost:4000/event/delete/${id}?email=${currentUser.email}`
          );

          if (res.status !== 200) {
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
          console.error("Delete error:", error.message);

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

  return { handleDelete };
}

export default useDeleteEvents;
