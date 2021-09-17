import React, { useState } from 'react'
import * as api from '../../api'
import ReactLoading from 'react-loading';
interface Props {
    id: any
    title: string
    text: string
    image: string
}
const Content: React.FC<Props> = ({id, title, text, image}) => {
    const [deletePost, setDeletePost] = useState(false)
    const [update, setUpdate] = useState(false)
    const [loading, setLoading] = useState(false)

    const [titleState,setTitleState] = useState(title)
    const [textState,setTextState] = useState(text)
    const [imageState,setImageState] = useState(image)


    if(loading) {
        return (
            <ReactLoading type="balls" color="ff0000" height={'20%'} width={'20%'} />
        )
    }

    return (
        <>
            <div className="flex flex-col space-y-5 md:flex-row  p-6 space-x-5 rounded shadow-lg w-full">
                <img className="md:h-full md:w-2/12 rounded-xl" src={imageState} alt="" />
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl text-gray-800">{titleState}</h1>
                    <p className="text-gray-600">{textState}</p>
                    <div className="space-x-2 pt-4">
                        <button onClick={() => setUpdate(true)} className="rounded px-4 py-2 bg-green-500 text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        </button>
                        <button onClick={() => setDeletePost(true)}  className="rounded px-4 py-2 bg-red-500 text-white"><svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg></button>
                    </div>
                </div>
            </div>

            {
                deletePost ? <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
             <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
         
               <div className="">
          
                 <div className="text-center p-5 flex-auto justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                         </svg>
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
         </svg>
                                 <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                                 <p className="text-sm text-gray-500 px-8">Do you really want to delete your account?
                         This process cannot be undone</p>    
                 </div>
          
                 <div className="p-3  mt-2 text-center space-x-4 md:block">
                     <button onClick={() => setDeletePost(false)} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                         Cancel
                     </button>
                     <button onClick={async () => {setLoading(true)
        await api.deletePost(id)
        setLoading(false)
        setDeletePost(false) } } className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                 </div>
               </div>
             </div>
           </div>: ''
            }
            
            
            
            
            {
                update ? <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
             <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
         
               <div className="">
          
                 <div className="text-center p-5 flex-auto justify-center space-y-3">
                         <input className="w-full border-2 border-yellow-600 rounded h-10" type="text" value={titleState} onChange={e => setTitleState(e.target.value)} placeholder="Title"/>
                         <input className="w-full border-2 border-yellow-600 rounded h-10" type="text" value={textState} onChange={e => setTextState(e.target.value)}  placeholder="Text"/>  
                         <input className="w-full border-2 border-yellow-600 rounded h-10" type="text" value={imageState} onChange={e => setImageState(e.target.value)} placeholder="Image" />
                 </div>
          
                 <div className="p-3  mt-2 text-center space-x-4 md:block">
                     <button onClick={() => setUpdate(false)} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                         Cancel
                     </button>
                     <button onClick={async () => {setLoading(true)
                await api.updatePost(id,{title: titleState,text: textState,image: imageState})
                setLoading(false)
                setUpdate(false) } } className="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">Save</button>
                 </div>
               </div>
             </div>
           </div>
 : ''
            }
            


            
        </>
            
        
    )
}

export default Content
