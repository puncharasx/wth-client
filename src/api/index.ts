import axios from 'axios'

interface Idata {
    title: string
    text: string
    image: string
}

const api = axios.create({
    baseURL: 'https://oh-shit-what-happend.herokuapp.com'
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data.data
}

export const postPosts = async (data: Idata) => {
    const response = await api.post('/posts',{
        title: data.title,
        text: data.text,
        image: data.image
    })
    return response.data
}

export const deletePost = async(id: string) => {
    await api.delete(`/posts/${id}`)
}

export const updatePost = async (id: string, data: Idata) => {
    await api.put(`/posts/${id}`,{
        title: data.title,
        text: data.text,
        image: data.image
    })
}