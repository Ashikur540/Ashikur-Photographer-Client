import { createBrowserRouter } from "react-router-dom";
import Services from "../../Components/Services/Services";
import Main from "../../Layout/Main";
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
            }
        ]

    }
])