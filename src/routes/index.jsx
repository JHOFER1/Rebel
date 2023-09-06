import React from "react";
import AuthContextProvider from '../context/authContex';
import PrivateRoute from "./authRoutes/PrivateRoute";
import PublicRoute from "./authRoutes/PublicRoute";
import { PRIVATE, CATEGORIES } from "../config/router/paths";

import Login from '../components/homepages/login/login';
import Home from "../components/homepages/home/home";
import Categories from "../components/categories/categories";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]

    },
    {
        path: PRIVATE,
        element: <PrivateRoute />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: CATEGORIES,
                element:<Categories/>
            }

        ]

    },
    {
        path: '*',
        element: <>Pagina no disponible</>
    }

]);

export const Routes = () => (
    <>
        <AuthContextProvider >
            <RouterProvider router={router} />
        </AuthContextProvider>
    </>

)