import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout1 from './Layout/Layout1';
import HomePage from './Pages/Home/HomePage';
import HrLogin from './Auth/Login/HrLogin';
import HrSignUp from './Auth/SignUp/HrSignUp';
import EmployeeLogin from './Auth/Login/EmployeeLogin';
import ForgetPasswordOtp from './Auth/Otp/ForgetPasswordOtp';
import Hrotp from './Auth/Otp/Hrotp';
import ForgoPassword from './Auth/ForgotPassword/ForgotPassword';
import Newpassword from './Auth/Newpassword/Newpassword';

import Layout2 from './Layout/Layout2'
import Dashboard from './Pages/Dashboard/Dashboard';

import Layout3 from './Layout/Layout3';
import Employees from './Pages/Employees1/EmployeesPage';
// import Profile from './Pages/Profile/Profile';
import AddEmployee from './Pages/AddEmployee/AddEmployee';
// import TaskPage from './Pages/AllTaskPage/AllTaskPage';
// import AddTask from './Components/AddTask/AddTask';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivateRouting from './PrivateRouting/PrivateRouting';
import AdminPrivateRouting from './PrivateRouting/AdminPrivateRouting';
import toast, { Toaster } from 'react-hot-toast';
import ErrPage from "./err/ErrPage";
import Forhome from './Pages/Home/Forhome';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1/>,
    children : [
    {
      path: "/",
      element: <Forhome />,
    },
    {
      path: "/signup",
      element: <HrSignUp />,
    },
    {
      path: "/login/employee",
      element: <EmployeeLogin />,
    },
    {
      path: "/login/company",
      element: <HrLogin />,
    },
    {
      path: "/complete-signup/:token",
      element: <Hrotp />,
    },
    {
      path: "/forgot-password",
      element: <ForgoPassword />,
    },
    {
      path: "/reset-password/:token",
      element: <ForgetPasswordOtp />,
    },
    {
      path: "/reset-password",
      element: <ForgetPasswordOtp />,
    },
    {
      path: "/new-password/:token",
      element: <Newpassword />,
    },
  ],
  errorElement: <ErrPage/>
  },
  {
    element: <PrivateRouting/>,
    children : [
      {
        element : <AdminPrivateRouting/>,
        children : [
          {
            path: "/eip/dashboard",
            element: <Layout2/>,
            children : [
              {
                path: "/eip/dashboard/:userId",
                element: <Dashboard />,
              },
            ]
          },
          {
            path: "/eip/",
            element: <Layout3/>,
            children : [
            {
              path: "/eip/employee/:CompanyId",
              element: <Employees />,
            },
            {
              path: "/eip/employee/:CompanyId/:employeeId",
              element: <Employees />,
            },
            // {
            //   path: "/eip/profile/:userId",
            //   element: <Profile />,
            // },
            {
              path: "/eip/employee/add-employee/:adminId",
              element: <AddEmployee />,
            },
            // {
            //   path: "/eip/task",
            //   element: <TaskPage />,
            // },
            // {
            //   path: "/eip/employee/add-task/:name",
            //   element: <AddTask />,
            // },
        
          ]
        },
        ]
      },
    
   
    ],
    errorElement: <ErrPage/>
  }
 
 
]);
// const isOnline = navigator.clipboard
// const isOnline1 = navigator.onLine
// console.log(isOnline)
// console.log(isOnline1)


const App = () => {
//   const isOnline = navigator.language
//   // const isOnline = navigator.userAgent
// const isOnline1 = navigator.onLine
// console.log(isOnline, "geolocation")
// console.log(isOnline1)

//   useEffect(() => {
//     if (isOnline1 == "true") {
//       toast.success("You are now online")
//     } else {
//       toast.error("You are currently offline")
//       // toast.error(isOnline)
//     }
//   }, [isOnline1])
  return (
    <>
      <RouterProvider router={router} />
      {/* <Toaster /> */}
      <ToastContainer position='top-right' autoClose="1000"/>
    </>
  )
}

export default App

// npm run dev