import React, {useEffect} from "react";
import {getComments} from "../../services/api.service";
import {IComment} from "../../models/IComment";
import CommentComponent from "../comment/CommentComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {loadComments} from "../../redux/slices/commentSlice";


const CommentsComponent = () => {
    let commentSliceState = useAppSelector(state => state.commentSliceItself);

    let dispatch = useAppDispatch()


    useEffect(() => {
        getComments().then(value => {
            dispatch(loadComments(value));
            // dispatch(removeUser(1));
        })
    }, []);

    return (
        <div>
            {
                commentSliceState.comments.map((comment: IComment) => <CommentComponent comment={comment} key={comment.id} />)
            }
        </div>

    )
}

export default CommentsComponent;