import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Catagory from "../Pages/Home/Home/Catagory/Catagory";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/Home/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Catagory></Catagory>,
                loader: () => fetch(`#/news`)
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`https://recap-the-news-dragon-server-obe2hmawi-dev-ismail09s-projects.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [{
            path: ':id',
            element: <News></News>,
            loader: ({params}) => fetch(`https://recap-the-news-dragon-server-obe2hmawi-dev-ismail09s-projects.vercel.app/news/${params.id}`)
        }]
    }
])

export default router;