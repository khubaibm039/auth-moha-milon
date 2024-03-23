import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Components/Orders/Orders";
import PrivetRoute from "./PrivetRoute";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "/orders",
                element: (
                    <PrivetRoute>
                        <Orders></Orders>
                    </PrivetRoute>
                ),
            },
        ],
    },
]);

export default route;
