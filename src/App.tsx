import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme/default";
import { PostsProvider } from "./contexts/PostsContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
