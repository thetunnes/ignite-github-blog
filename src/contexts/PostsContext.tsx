import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from './../utils/api';

interface PostsType {
  posts: PostsContextType[]
  amountPosts: number
}

interface PostsContextType {
  title: string
  created_at: string
  body: string
  number: number
}

export const PostsContext = createContext({} as PostsType)


interface ProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: ProviderProps) {
  const [posts, setPosts] = useState([])
  const [amountPosts, setamountPosts] = useState(0)

  async function getPostsFromRepo() {

    const response = await api.get('/search/issues?q=repo:thetunnes/my-blog')
    const { data } = response
    setPosts(data.items)
    setamountPosts(data.total_count)
    
  } 

  useEffect(() => {
    getPostsFromRepo()
  }, [])
  return (
    <PostsContext.Provider value={{ posts, amountPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)