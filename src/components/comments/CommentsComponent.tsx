import React, {useEffect} from "react";
import {useStore} from "../../store";
import {getComments} from "../../services/api.service";
import {IComment} from "../../models/IComment";
import CommentComponent from "../comment/CommentComponent";


const CommentsComponent = () => {
    let {commentsSlice: {allComments, loadComments}} = useStore();
    useEffect(() => {
        getComments().then(value => loadComments(value));
    }, []);

    return (
        <div>
            {
                allComments.map((comment: IComment) => <CommentComponent comment={comment} key={comment.id} />)
            }
        </div>

    )
}

export default CommentsComponent;