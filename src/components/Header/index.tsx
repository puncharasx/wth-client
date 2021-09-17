import React from 'react'

const Header: React.FC = () => {
    return (
        <div className="bg-indigo-600 w-full h-14 shadow-md">
            <div className="flex justify-between items-center h-full px-10">
                <p></p>
                <h1 className="text-white text-2xl font-semibold select-none">Hi, there 👹</h1>
                <div>
                   <a href="https://github.com/puncharasx" className="text-white text-2xl cursor-pointer hover:text-black"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header
