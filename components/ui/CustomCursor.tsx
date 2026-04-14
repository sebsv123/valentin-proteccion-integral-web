'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let mouseX = -100, mouseY = -100
    let ringX  = -100, ringY  = -100

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        ringRef.current?.classList.add('cursor-hovered')
        dotRef.current?.classList.add('cursor-dot-hovered')
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        ringRef.current?.classList.remove('cursor-hovered')
        dotRef.current?.classList.remove('cursor-dot-hovered')
      }
    }

    const loop = () => {
      // Dot: sigue instantáneo
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
      }
      // Ring: lerp suave pero rápido (factor 0.18)
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
                   rounded-full bg-[var(--blue)]
                   transition-opacity duration-150
                   cursor-dot"
        style={{ width: 10, height: 10, willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none
                   rounded-full border-2 border-[var(--blue)]
                   opacity-25 transition-[opacity,transform,width,height] duration-150
                   cursor-ring"
        style={{ width: 40, height: 40, willChange: 'transform' }}
      />
    </>
  )
}
