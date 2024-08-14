import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Authentication/Login/Login";
import Signup from "../Pages/Authentication/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import BookingList from "../Pages/Dashboard/BookingList/BookingList";
import Review from "../Pages/Dashboard/Review/Review";
import BookNow from "../Pages/Dashboard/BookNow/BookNow";
import MakeAdmin from "../Pages/Dashboard/AdminItems/MakeAdmin/MakeAdmin";
import ManageService from "../Pages/Dashboard/AdminItems/ManageService/ManageService";
import AddService from "../Pages/Dashboard/AdminItems/AddService/AddService";
import OrderList from "../Pages/Dashboard/AdminItems/OrderList/OrderList";
import PrivateRouter from "./PrivateRouter";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "bookNow",
        element: <BookNow></BookNow>,
      },
      {
        path: "bookingList",
        element: <BookingList></BookingList>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      // Admin Routes
      {
        path: "makeAdmin",
        element: <MakeAdmin></MakeAdmin>,
      },
      {
        path: "manageService",
        element: <ManageService></ManageService>,
      },
      {
        path: "addService",
        element: <AddService></AddService>,
      },
      {
        path: "orderList",
        element: <OrderList></OrderList>,
      },
    ],
  },
]);
