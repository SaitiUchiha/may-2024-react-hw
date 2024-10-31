import {useStore} from "../store";
import React, {useEffect} from "react";
import {getComments} from "../services/api.service";
import {IComment} from "../models/IComment";

const CommentsPage = () => {

    let {commentsSlice:{allComments, loadComments}} = useStore();
    useEffect(() => {
        getComments().then(value => loadComments(value));
    }, []);

    return (
        <div>
            {
                allComments.map((comment:IComment) =>
                    <div>
                        <h3>Pot Id: {comment.postId}</h3>
                        <h2>{comment.id} {comment.name}</h2>
                        <h3>{comment.email}</h3>
                        <p>{comment.body}</p>
                    </div>)
            }
        </div>

    )
}

export default CommentsPage;