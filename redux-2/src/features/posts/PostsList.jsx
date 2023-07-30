import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuth from "./PostsAuth";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map(post=>(
     <article key={post.id}>
       <h3>{post.title}</h3>
       <p>{post.content}</p>
       <p><PostAuth userId={post.userId}/></p>
       <p><TimeAgo timestamp={post.date}/></p>
        <ReactionButtons post={post}/>
       <br />
     </article>
    ))
  return (
    <div>
        {renderPosts}
    </div>

  )
}

export default PostsList