import React, {useEffect} from "react";
import {useStore} from "../../store";
import {getPosts} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostComponent from "../post/PostComponent";


const PostsComponent = () => {
    let {postSlice: {allPosts, loadPosts}} = useStore();
    useEffect(() => {
        getPosts().then(value => loadPosts(value));
    }, []);
  return (
      <div>
          {
              allPosts.map((post:IPost) => <PostComponent post={post} key={post.id} />)
          }
      </div>

  )
}

export default PostsComponent;