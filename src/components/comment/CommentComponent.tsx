import React, {FC} from "react";
import {IComment} from "../../models/IComment";


interface IPorps{
    comment:IComment
}

const CommentComponent:FC<IPorps> = ({comment}) => {
    return (
        <div>
            <h3>Pot Id: {comment.postId}</h3>
            <h2>{comment.id} {comment.name}</h2>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentComponent;