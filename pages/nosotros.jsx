import React from 'react'
import Image from 'next/image'

const Nosotros = () => {
  return (
    <div className='flex flexc-col w-full justify-center'>
      <div className='flex h-screen flex-wrap w-3/4 items-center text-white'>
        <div className='flex h-screen flex-row w-full justify-center items-center'>
          <div className='w-2/4'>
            <img src="images/Image1.jpg" alt="" />
          </div>
          <div className='flex-row w-2/4'>
            <h2>Titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit blanditiis eveniet debitis enim provident officiis, consequuntur corporis eos. Voluptatem voluptatum dignissimos provident commodi fugit nam temporibus fugiat aliquam tempore?</p>
          </div>
        </div>

        <div className='flex h-screen flex-row w-full justify-center items-center'>
        <div className='flex-row w-2/4'>
            <h2>Titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit blanditiis eveniet debitis enim provident officiis, consequuntur corporis eos. Voluptatem voluptatum dignissimos provident commodi fugit nam temporibus fugiat aliquam tempore?</p>
          </div>
          <div className='w-2/4'>
            <img src="images/Image1.jpg" alt="" />
          </div>
        </div>

        <div className='flex h-screen flex-row w-full justify-center items-center'>
          <div className='w-2/4'>
            <img src="images/Image1.jpg" alt="" />
          </div>
          <div className='flex-row w-2/4'>
            <h2>Titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit blanditiis eveniet debitis enim provident officiis, consequuntur corporis eos. Voluptatem voluptatum dignissimos provident commodi fugit nam temporibus fugiat aliquam tempore?</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Nosotros