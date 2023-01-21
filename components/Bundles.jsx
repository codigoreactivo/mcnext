import React from 'react'
import Image from 'next/image'

const Bundles = () => {
  return (
    <div className='flex w-full h-screen'>
        <div className='flex flex-wrap justify-evenly  gap-5 p-10'>
            <Image src="/images/Image1.jpg" alt="" width={500} height={500}/>
            <Image src="/images/Image1.jpg" alt="" width={500} height={500}/>
            <Image src="/images/Image1.jpg" alt="" width={500} height={500}/>
            <Image src="/images/Image1.jpg" alt="" width={500} height={500}/>
            <Image src="/images/Image1.jpg" alt="" width={500} height={500}/>
            <Image src="/images/Image1.jpg" alt="" width={500} height={500}/>
        </div>
    </div>
  )
}

export default Bundles