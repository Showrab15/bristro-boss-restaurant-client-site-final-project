import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";


// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main></Main>,
//       children: [
//         {
//             path : '/',
//             element: <Home></Home>
//         },
//         {
//           path : 'menu',
//           element: <Menu></Menu>
//         },
//         {
//           path : 'order/:category',
//           element: <Order></Order>
//         },
//         {
//           path : '/login',
//           element: <Login></Login>
//         },
//         {
//           path : '/register',
//           element: <Register></Register>
//         },
//         {
//           path : 'secret',
//           element: <PrivateRoute><Secret></Secret></PrivateRoute>
//         }
//       ],
    
//     },
//     {
//       path: 'dashboard',
//       element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute> ,
//       children : [
//         {
//           path: 'myCart',
//           element: <MyCart></MyCart>
//         },
//         {
//           path : 'allusers',
//           element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
//         },
//         {
//           path : 'addItem',
//           element: <AdminRoute><AddItem></AddItem></AdminRoute>
//         }
//       ]
//     }
//   ]);


//   export default router



// import {
//   createBrowserRouter,
// } from "react-router-dom";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
        path: 'menu', 
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
    children: [

      //user routes
      {
      path: 'userhome',
      element: <UserHome></UserHome>
      },
      {
        path: 'myCart', 
        element: <MyCart></MyCart>
      },
      {
        path : "payment",
        element: <Payment></Payment>
      },

      //admin routes
      {
        path : "adminhome",
        element: <AdminHome></AdminHome>
      },
      
      {
        path: 'allusers', 
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path : 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
]);

export default router
  