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
          element: <Order></Order>,
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
]);