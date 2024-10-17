import React, {FC} from "react";
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";


type PostProps = {
    item: IPost;
}

const PostShort: FC<PostProps> = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()}><h2>{item.title}</h2></Link>
        </div>

    )
}

export default PostShort;