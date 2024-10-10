import React, {FC, ReactNode} from "react";
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

type IPostProps = { posts: IPost[] } & {children?: ReactNode};


const Posts:FC<IPostProps> = ({posts}) => {
    console.log(posts)
  return (
      <div>
          {
              posts.map(value => <Post key={value.id} item={value}/>)
          }
      </div>

  )
}

export default Posts;