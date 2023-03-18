import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between bg-[#ab4d46]'>
                <div className='text-2xl font-bold text-blue-500 m-8 p-4 '>logo</div>
                <div className='m-8 p-4'>

                    <span className='m-2 p-2 text-blue-300 bg-gray-200'>icons</span>
                    <span className='m-2 p-2 text-blue-300 bg-gray-200'>icons</span>
                    <span className='m-2 p-2 text-blue-300 bg-gray-200'>icons</span>
                    <span className='m-2 p-2 text-blue-300 bg-gray-200'>icons</span>
                </div>

            </nav>
        </>
    )
}

export default Navbar
