import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getComments} from "../../services/api.services";
import CommentShort from "../Comment/CommentShort";


const CommentsComponent:FC = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then(value =>  setComments(value));

    }, []);



    return (
        <div>
            {comments.map((comment: IComment, index) =>
                <CommentShort key={index} item={comment}></CommentShort>)}
        </div>
    );
};

export default CommentsComponent;