import React from 'react';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import JobDetails from '../Pages/JobDetails.jsx/JobDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import JobApply from '../Pages/JobApply/JobApply';
import MyApplication from '../Pages/MyApplication/MyApplication';
import AddJob from '../Pages/AddJob/AddJob';
import PostedJob from '../Pages/MyPostedJob/PostedJob';
import ViewApplication from '../ViewApplication.jsx/ViewApplication';

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path:'/signin',
                Component:SignIn
            },
            {
                path:'/jobs/:id',
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
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
                path:'/addjob',
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'/postedjob',
                element:<PrivateRoute><PostedJob></PostedJob></PrivateRoute>
            },
            {
                path:'/applications/:id',
                element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:3000/applications/job/${params.id}`)
            }
        ]
    },
]);

export default router;