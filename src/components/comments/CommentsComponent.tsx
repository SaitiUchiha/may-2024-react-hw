import React, {useEffect} from "react";
import {IComment} from "../../models/IComment";
import CommentComponent from "../comment/CommentComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {commentSliceActions} from "../../redux/slices/commentSlice";


const CommentsComponent = () => {
    let {comments} = useAppSelector(state => state.commentSliceItself);

    let dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(commentSliceActions.loadComments());
    }, []);

    return (
        <div>
            {
                comments.map((comment: IComment) => <CommentComponent comment={comment} key={comment.id} />)
            }
        </div>

    )
}

export default CommentsComponent;