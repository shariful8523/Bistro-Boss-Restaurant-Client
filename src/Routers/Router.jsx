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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import Userhome from "../Pages/Dashboard/Userhome";
import AdminHome from "../Pages/Dashboard/AdminHome";



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
          path: 'userHome',
          element: <PrivaterRoutes> <Userhome></Userhome> </PrivaterRoutes>,
      },
      {
        path: "cart",
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
      },
      {
        path: 'reviewsAdd',
        element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>,
      },
      {
          path: 'payment',
          element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
      },
      {
        path: 'paymentHistory',
        element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
      },

      // Admin routers
      {
        path: 'adminHome',
        element: <AdminRoute> <AdminHome></AdminHome> </AdminRoute>,
      },
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
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>,
      },
      {
        path:'paymentHistory',
        element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>,
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
        loader: ({params}) => fetch(`https://bistro-boss-restaurant-server-tawny.vercel.app/menu/${params.id}`)
      }
     ]
  },
]);