import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from './../utils/api';

interface PostsType {
  posts: PostsContextType[]
  amountPosts: number
  getPostsFromRepo: (text?: string) => void
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
  const repo = 'thetunnes/my-blog'
  const [posts, setPosts] = useState([])
  const [amountPosts, setAmountPosts] = useState(0)

  async function getPostsFromRepo(text = '') {
    console.log(text)
    const response = await api.get(`/search/issues?q=${text}repo:${repo}`)
    console.log(response)
    const { data } = response
    setPosts(data.items)
    setAmountPosts(data.total_count ?? 0)
    
  } 

  useEffect(() => {
    getPostsFromRepo()
  }, [])
  return (
    <PostsContext.Provider value={{ posts, amountPosts, getPostsFromRepo }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)