import React from 'react'
import Navbar from '@/components/Navbar'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-green-500 text-2xl font-bold text-center'>Dashboard</h1>
            <div className='flex flex-wrap'>
                <img src="./img/1.jpg" />
                <img src="./img/1.jpg" />
                <img src="./img/1.jpg" />
                <img src="./img/1.jpg" />
            </div>
        </>
    )
}

export default Dashboard
