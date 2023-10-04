import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Layout/Home/Home';
import MainLeout from '../MainLeout/MainLeout';
import Login from '../Layout/Login/Login';
import Register from '../Layout/Register/Register';
import Orders from '../Components/Orders/Orders';
import PrivetRout from './PrivetRout';

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLeout></MainLeout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/order",
                element: <PrivetRout><Orders></Orders></PrivetRout>
            }
        ]
    }

])

export default route;