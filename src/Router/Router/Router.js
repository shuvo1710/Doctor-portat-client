import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DashboardLayout from "../../Pages/DashboardLayout/DashboardLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Loyout/Main";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "/dashboard/addDoctor",
        element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>,
      },
      {
        path: "/dashboard/manageDoctor",
        element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <AdminRoute><Payment></Payment></AdminRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/booking/${params.id}`)
      },
      
    ],
  },
]);
