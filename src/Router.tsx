import { Route, Routes } from "react-router-dom";
import { BasePage } from "./BasePage";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
      <Route path="/" element={<Home />} />
      <Route path="/post/:numberPost" element={<Post />} />
      </Route>
    </Routes>
  )
}