import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 200,
      width: 200,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'violet',
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  return (
      <motion.div className='bg-[#FD4F00] h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none z-50' variants={variants} animate={cursorVariant}/>
  )
}

export default Hero
