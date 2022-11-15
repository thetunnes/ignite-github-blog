import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

import { usePosts } from "./../contexts/PostsContext";
import { ListPostsContainer } from "./../styles/ListPosts";

export function ListPosts() {

  const { posts } = usePosts();

  return (
    <ListPostsContainer>
      {posts.map((post) => (
        <Link key={post.number} to={`/post/${post.number}`}>
          <header>
            <h4>{post.title}</h4>
            <span>{formatDate(post.created_at)}</span>
          </header>

          <p>{post.body.split('.')[0]}</p>
        </Link>
      ))}
    </ListPostsContainer>
  );
}
