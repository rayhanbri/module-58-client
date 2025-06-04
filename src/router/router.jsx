import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Singin/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication.jsx/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyAddedJob";
import ViewApplication from "../Pages/ViewApplications/ViewApplication";

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
  },
  {
    path:'/jobs/:id',
    Component:JobDetails,
    loader:({params}) =>fetch(`http://localhost:3000/jobs/${params.id}`)
  },
  {
    path:'/jobApply/:id',
    element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
  },
  {
    path:'/myapplication',
    element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
  },
  {
    path:'/addJob',
    element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
  },
  {
    path:'/postedjob',
    element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
  },
  {
    path:'/applications/:id',
    element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
    loader:({params}) => fetch(`http://localhost:3000/applications/job/${params.id}`)
  }
]);

export default router;