import { createBrowserRouter } from "react-router-dom";
import Allservices from "../../Components/Allservices/Allservices";
import ServiceDetails from "../../Components/Services/ServiceDetails/ServiceDetails";
import Services from "../../Components/Services/Services";
import Main from "../../Layout/Main";
import Addservices from "../../Pages/Addservices/Addservices";
import { Login } from "../../Pages/Authentication/Login/Login";
import { Register } from "../../Pages/Authentication/Register/Register";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ErrorPage from "../../Pages/Others/Error/ErrorPage";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../Private/PrivateRoutes";

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
                element: <PrivateRoute><Addservices /></PrivateRoute>,
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
                loader: ({ params }) => fetch(`https://ashikur-photographer-server.vercel.app/services/${params.id}`),
                element: < ServiceDetails />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/reviews",
                element: <PrivateRoute>< MyReviews /></PrivateRoute>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/reviews/:id/edit",
                element: <PrivateRoute>< UpdateReview /></PrivateRoute>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
                errorElement: <ErrorPage />,
            }
        ]

    }
])