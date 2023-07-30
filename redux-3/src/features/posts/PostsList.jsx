import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts } from "./postSlice";
import PostAuth from "./PostsAuth";
import TimeAgo from "./TimeAgo";
import { useEffect } from "react";

const PostsList = () => {
   const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = posts.posts.map(post=>(
     <article key={post.id}>
       <h3>{post.title}</h3>
       <p>{post.body}</p>
       <p><PostAuth userId={post.id}/></p>
       <p><TimeAgo timestamp={post.date}/></p>
       <br />
     </article>
    ))

    const logPosts = ()=>{
      dispatch(fetchPosts())
      console.log(posts)
    }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  
  return (
    <div>
      <button onClick={e=>logPosts()}>show posts</button>
      {posts.status== 'loading' && <h1>Loading...</h1>}
      
        {posts.status == "succeeded" && renderPosts}

        {posts.status== 'failed' && <h1>{posts.error}</h1>}
    </div>

  )
}

export default PostsList