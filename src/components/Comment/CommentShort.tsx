import React, {FC} from "react";
import {IComment} from "../models/IComment";
import {Link} from "react-router-dom";

type CommentProps = {
    item: IComment;
}

const CommentShort: FC<CommentProps> = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()}><h2>{item.id} - {item.body}</h2></Link>
        </div>

    )
}

export default CommentShort;