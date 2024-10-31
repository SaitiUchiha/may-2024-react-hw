import React, {FC} from "react";
import {PostWithCommentsType} from "../../models/PostWithCommentsType";

interface IProps {
    items: PostWithCommentsType[]
}

const PostWithComments: FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map((item) => <div>
                    <h2>{item.id} - {item.title}</h2>
                    <ul>
                        {
                            item.comments.map((comment) =>
                                <li key={comment.id}>
                                    <h3>{comment.id} {comment.name} {comment.email}</h3>
                                    <p>{comment.body}</p>
                                </li>)
                        }
                    </ul>
                </div>)
            }
        </div>

    )
}

export default PostWithComments;