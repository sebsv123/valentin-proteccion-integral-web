'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY })

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button'))
        setHovered(true)
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button'))
        setHovered(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none
                   rounded-full bg-[var(--blue)]"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        style={{ width: 10, height: 10 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none
                   rounded-full border-2 border-[var(--blue)]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovered ? 1.8 : 1,
          opacity: hovered ? 0.5 : 0.25,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  )
}
