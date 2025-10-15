import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import {PetDetails} from "./PetDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/pet-details/:petId",
        element: <PetDetails/>,
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>);

