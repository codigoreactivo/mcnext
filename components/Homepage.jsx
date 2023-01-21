import React from 'react'
import { FaRegCaretSquareDown } from "react-icons/fa";

const Homepage = () => {
  return (
    <div  className='flex  items-center flex-col text-white'>
        <div className='flex justify-center items-center w-full h-screen'>
            <h1 className='uppercase text-8xl text-center font-bold text-white'>estrategas digitales</h1>
            <div className='flex absolute bottom-40 flex-col text-center hover:translate-y-5 hover:text-[#FD4F00] hover:scale-110 duration-200 ease-in'>
            <FaRegCaretSquareDown size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Homepage