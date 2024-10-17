import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IComment} from "../components/models/IComment";
import {getComment} from "../services/api.services";



const PostsFullByID = () => {
        let {id} = useParams();
        const [post, setPost] = useState<IComment| null>(null);
        useEffect(() => {
                if (id){
                        getComment(id).then(value => setPost(value));
                }
        }, []);
  return (
      <div>
              <h3>{post?.id}</h3>
              <p>{post?.body}</p>
              <p>Tags: {post?.postId}</p>
              <p>Likes: {post?.likes}</p>
              <p>User: </p>
              <p>ID: {post?.user.id}</p>
              <p>User Name: {post?.user.username}</p>
              <p>Full Name: {post?.user.fullName}</p>
      </div>
  )
      ;
};

export default PostsFullByID;