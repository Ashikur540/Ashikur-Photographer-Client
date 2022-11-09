import { createBrowserRouter } from "react-router-dom";
import Allservices from "../../Components/Allservices/Allservices";
import ServiceDetails from "../../Components/Services/ServiceDetails/ServiceDetails";
import Services from "../../Components/Services/Services";
import Main from "../../Layout/Main";
import Addservices from "../../Pages/Addservices/Addservices";
import { Login } from "../../Pages/Authentication/Login/Login";
import { Register } from "../../Pages/Authentication/Register/Register";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Others/Error/ErrorPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/services",
                element: <Services />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/services/all",
                element: <Allservices />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/services/add",
                element: <Addservices />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/login",
                element: < Login />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/register",
                element: < Register />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/services/:id",
                element: < ServiceDetails />,
                errorElement: <ErrorPage />,
            }
        ]

    }
])