import {
  createBrowserRouter,
} from "react-router-dom"
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Contacts from "../Components/Contacts/Contacts";
import Login from "../Pages/AuthenticationForm/Login/Login";
import Register from "../Pages/AuthenticationForm/Register/Register";
import PrivaterRoutes from "./PrivateRoutes";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/cart";
import AddReview from "../Pages/Dashboard/AddReview";
import AllUser from "../Pages/Dashboard/AllUser";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute"
import ManageItem from "../Pages/Dashboard/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";



export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "menu",
          element: <Menu></Menu>,
        },
        {
          path: "order/:category",
          element:  <Order></Order> ,
        },
        {
           path: "Contact",
           element:<Contacts></Contacts>,
        },
        {
          path:'login',
          element: <Login></Login>,
        },
        {
          path:'register',
          element: <Register></Register>,
        }
    ]
  },
  {
     path: 'dashboard',
     element:  <PrivaterRoutes> <Dashboard></Dashboard> </PrivaterRoutes> ,
     children: [

      // Normal User routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: 'reviewsAdd',
        element: <AddReview></AddReview>,
      },
      {
          path: 'payment',
          element: <Payment></Payment>,
      },

      // Admin routers
      {
        path: 'allUsers',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>,
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>,
      },
      {
        path:'manageItem',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
     ]
  },
]);