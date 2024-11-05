import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsWithComments from "../pages/PostsWithComments";

export const router = createBrowserRouter([
        {
            path: '/', element: <App/>, children: [
                {path: 'users', element:<UsersPage/>},
                {path: 'posts', element:<PostsPage/>},
                {path: 'comments', element:<CommentsPage/>},
                {path: 'show', element:<PostsWithComments/>}
            ]},
    ])
;