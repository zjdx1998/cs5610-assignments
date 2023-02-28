import posts from "./posts.json";
import PostItem from "./PostItem.js";
import "../post-list/index.css";

const PostList = () => {
  return (
    <ul className="list-group">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
