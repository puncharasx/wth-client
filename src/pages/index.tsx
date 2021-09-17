import React, {useState} from 'react'
import * as api from '../api'
import Content from '../components/Content'
import Header from '../components/Header'
import {
    useQuery,
    useQueryClient,
  } from 'react-query'
import Input from '../components/Input'

interface Post {
  _id?: any
  title: string
  text: string
  image: string
}



function useFetch() {
  return useQuery<Post[], Error>("posts", api.getPosts)
}

const Home = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const queryClient = useQueryClient()
    const postsQuery = useFetch()




    if (postsQuery.error) {
      if (postsQuery.error) {
        return <p>{postsQuery.error.message}</p>;
      }
    }
  
    return (
    <div>
     
    <Header />
    <div className="flex flex-col p-5 items-center">
        <Input />
        {
      postsQuery.isLoading || postsQuery.isIdle ? <div>Loding</div> :
        postsQuery.data.map((post: Post, index:number) => (
          <Content key={index} id={post._id} title={post.title} text={post.text} image={post.image} />
          ))
      }
  
    
    </div>
    </div>
    )
}

export default Home
