import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Home from "../pages/Home/Home";
import CreateUpdateEventPage from "../pages/create-updateEventPage/create-updateEventPage";
import CreateEvent from "../pages/create-updateEventPage/CreateEvent";
import EventDetails from "../pages/EventDetails";
import { param } from "framer-motion/client";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import ManageEvents from "../pages/ManageEvents";
import UpcomingEvents from "../pages/UpcomingEvents";
import JoinedEvents from "../pages/JoinedEvents";
import UpdateEvent from "../pages/create-updateEventPage/UpdateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/events/upcoming",
        loader: async () => {
          const res = await fetch("http://localhost:4000/upcoming-events");
          if (!res.ok) throw new Error("Faild to load enents data!");
          return await res.json();
        },
        Component: UpcomingEvents,
      },
      {
        path: "/event-details/:id",
        loader: async ({ params }) => {
          try {
            const res = await axios.get(
              `http://localhost:4000/event-details/${params.id}`
            );
            return res.data;
          } catch (error) {
            throw new Error("Faild to load details Data");
          }
        },
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/events/joined",

        element: (
          <PrivateRoute>
            <JoinedEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",

        element: (
          <PrivateRoute>
            <ManageEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
    ],
  },
  {
    path: "/event",
    Component: CreateUpdateEventPage,
    children: [
      {
        path: "/event/create",
        Component: CreateEvent,
      },
      {
        path: "/event/update/:id",
        Component: UpdateEvent,
      },
    ],
  },
]);
