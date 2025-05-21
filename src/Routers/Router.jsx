import {
  createBrowserRouter,
} from "react-router-dom"
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";



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
        }
    ]
  },
]);