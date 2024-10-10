import React, {FC,  useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {getPostOfUser} from "./services/user.api.service";
import {IPost} from "./models/IPost";
import Posts from "./components/posts/Posts";

const App: FC = () =>{

    const [posts, setPosts] = useState<IPost[]>([])

    const clickHandler = async (id: number) => {
        setPosts(await getPostOfUser(id));
    }
    return (
        <>
            <hr/>
            <div><Posts posts={posts}/></div>
            <Users clickHandler={clickHandler}/>
        </>
    );

}

export default App;
