import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)

            }
        ]
    }
])

export default router;