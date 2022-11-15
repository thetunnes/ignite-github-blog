import { Header } from "../components/Header";
import { ListPosts } from "../components/ListPosts";
import { Profile } from "../components/Profile";
import { SearchPost } from "../components/SearchPost";
import { HomeContainer } from "../styles/Home";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchPost />
      <ListPosts />
    </HomeContainer>
  );
}
