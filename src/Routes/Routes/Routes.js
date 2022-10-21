import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Catagory from "../../Pages/Catagory/Catagory";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Catagory></Catagory>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])