import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'



import React, { useState } from 'react'

export const NavBar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    {
      id: 1,
      link: 'no somos una agencia'
    },
    {
      id: 2,
      link: 'portafolio'
    },
    {
      id: 3,
      link: 'servicios'
    },
    {
      id: 4,
      link: 'contacto'
    }
  ]

  return (
    <div className=' flex justify-between items-center bg-transparent fixed top-10 left-20 right-20 z-50'>
        <div className='flex justify-between items-center w-full text-white'>
        <h1 className='uppercase text-3xl font-normal'>monstruo creativo</h1>
        <button className='ml-4' onClick={() => setOpen(true)}>
        <FaBars size={30}/>
        </button>
        </div>
        <div className={`${!open && "hidden"} bg-[#FD4F00]/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

        <div className={`${open ? "w-full" : "w-0"} bg-white h-full fixed top-0 left-0 transition-all duration-300 z-50`}>
        <div className={`${!open && "hidden"}  flex h-full w-full items-center justify-center`}>
            <div className='flex fixed top-0 p-10 w-full items-center justify-between'>
                <Link href='/#home'>
                    <h2 className='text-[#FD4F00] uppercase text-3xl font-bold'>monstruo creativo</h2>
                </Link>
                <button className='text-black' onClick={() => setOpen(false)}>
                  <FaTimes size={30}/>
                </button>
            </div>
            <div className='flex flex-col h-fit gap-20 justify-center items-center'>
                <ul className=' uppercase'>
                    {links.map(({id, link}) =>(
                        <Link key={id} href={`/#${link}`}>
                        <li className='sm:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl py-4 tracking-wider cursor-pointer font-black hover:bg-[#FD4F00] hover:text-white duration-300 p-3 ease-in'>{link}</li>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}


export default NavBar
