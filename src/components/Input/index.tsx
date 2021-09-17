import React, { useState } from 'react'
import * as api from '../../api'

const Input = () => {
    
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit =  async (e: any) => {
        e.preventDefault()
        api.postPosts({title,text,image})
        setTitle('')
        setText('')
        setImage('')
        
       
    }
    return ( 
    <div className="space-y-5 px-2 py-5 rounded-sm shadow-lg ">
        <h1 className="font-bold text-2xl text-center">Bro Bro Bro.</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
            <input onChange={e => setTitle(e.target.value)} value={title} className="border-2 rounded-md h-11 w-full" type="text" placeholder="Title" />
            <input onChange={e => setText(e.target.value)} value={text} className="border-2 rounded-md h-11 w-full" type="text" placeholder="Text" />
            <input onChange={e => setImage(e.target.value)} value={image} className="border-2 rounded-md h-11 w-full" type="text" placeholder="Image URL" />
            <button className="border-2 rounded-md p-2 text-white bg-purple-600 hover:bg-purple-500">POST</button>
        </form>
    </div>
    )
}

export default Input
