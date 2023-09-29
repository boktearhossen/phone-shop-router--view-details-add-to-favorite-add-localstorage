import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Phone from "../Pages/Phone/Phone";


const myCreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <Error></Error>,
      children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/phones.json'),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: ()=> fetch('/phones.json'),
      },
      ]
    },
  ]);

  export default myCreateRouter