import React, { useState, useEffect } from 'react';

const Portfolio = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // fetch images from an API or set them manually
    setImages([
      { id: 1, src: 'images/Image1.jpg', title: 'PRO' },
      { id: 2, src: 'images/Image2.jpg', title: 'PRO' },
  ]);
  }, []);

  return (
    <div className='flex justify-center items-center w-full h-screen '>
        <h1 className='text-white text-8xl font-bold uppercase'>portafolio</h1>

    </div>
    
  )
}

export default Portfolio