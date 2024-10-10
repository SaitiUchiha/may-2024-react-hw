import React, {FC} from "react";
import {IPost} from "../../models/IPost";


type PostProps = {
    item: IPost;
}

const Post:FC<PostProps> = ({item}) => {
  return (
      <div>
          <h2>{item.title}</h2>
          <h3>{item.id}</h3>
          <p>{item.body}</p>
          <p>Tags: {item.tags}</p>
          <p>Likes: {item.reactions.likes}</p>
          <p>Dislikes: {item.reactions.dislikes}</p>
          <p>Viesws: {item.views}</p>
          <p>User Id: {item.userId}</p>
          <hr/>
      </div>

  )
}

export default Post;