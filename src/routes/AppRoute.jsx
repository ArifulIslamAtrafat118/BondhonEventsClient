import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Home from "../pages/Home/Home";
import CreateUpdateEventPage from "../pages/create-updateEventPage/create-updateEventPage";
import CreateEvent from "../pages/create-updateEventPage/CreateEvent";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home
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
      path:"/event",
      Component: CreateUpdateEventPage,
      children:[
        {
          path: "/event/create",
          Component: CreateEvent,
        }
      ]
    }
  ],
  
);
