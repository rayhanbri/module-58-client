import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Singin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {index:true,Component:Home}
    ]
  },
  {
    path:'/register',
    Component:Register
  },
  {
    path:'/signin',
    Component:SignIn
  }
]);

export default router;