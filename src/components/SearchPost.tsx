import { SearchPostContainer } from "../styles/SearchPost";
import { usePosts } from "./../contexts/PostsContext";
import { useEffect, useState } from "react";

export function SearchPost() {
  const { amountPosts, getPostsFromRepo } = usePosts();

  const [searchTitlePost, setSearchTitlePost] = useState("");

  useEffect(() => {
    getPostsFromRepo(searchTitlePost);
  }, [searchTitlePost]);

  return (
    <SearchPostContainer>
      <div className="title">
        <h3>Publicações</h3>
        <span>
          {amountPosts === 1
            ? `${amountPosts} publicação`
            : amountPosts > 1
            ? `${amountPosts} publicações`
            : null}
        </span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo pelo título"
        onChange={({ target }) => setSearchTitlePost(target.value)}
      />
    </SearchPostContainer>
  );
}
