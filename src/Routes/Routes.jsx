import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<SignIn></SignIn>
            },
            {
                path:'register',
                element:<SignUp></SignUp>
            },
            {
                path:'about',
                element:<About/>
            }
        ]
    }
])

export default router;