import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import HomePage from "../pages/HomePage";
import Comments from "../pages/Comments";

export const routes = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>,children:[
            {index:true, element:<HomePage/>},
            {path:'users', element:<Users/>},
            {path:'posts', element:<Posts/>},
            {path:'comments', element:<Comments/>}
        ],
        errorElement:<CustomErrorLayout/>
    },


]);