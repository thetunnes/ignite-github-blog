import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import { usePosts } from "./../contexts/PostsContext";
import { ListPostsContainer } from "./../styles/ListPosts";

export function ListPosts() {

  const { posts } = usePosts();
  console.log(posts)
  return (
    <ListPostsContainer>
      {posts?.length ? posts.map((post) => (
        <Link key={post.number} to={`/post/${post.number}`}>
          <header>
            <h4>{post.title}</h4>
            <span>{formatDate(post.created_at)}</span>
          </header>

          <p>{post.body.split('.')[0]}</p>
        </Link>
      )): <p>Não encontramos posts para essa query</p>}
    </ListPostsContainer>
  );
}
