import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPost} from "../services/api.services";
import {IPost} from "../components/models/IPost";



const PostsFullByID = () => {
        let {id} = useParams();
        const [post, setPost] = useState<IPost| null>(null);
        useEffect(() => {
                if (id){
                        getPost(id).then(value => setPost(value));
                }
        }, []);
  return (
      <div>
              <h3>{post?.id}</h3>
              <p>{post?.body}</p>
              <p>Tags: {post?.tags}</p>
              <p>Likes: {post?.reactions.likes}</p>
              <p>Dislikes: {post?.reactions.dislikes}</p>
              <p>Viesws: {post?.views}</p>
              <p>User Id: {post?.userId}</p>
      </div>
  )
      ;
};

export default PostsFullByID;