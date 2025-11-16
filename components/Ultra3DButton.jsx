'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Ultra3DButton({ children, href = '#', className = '' }) {
  const el = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useTransform(mouseX, [-100, 100], [12, -12])
  const rotateX = useTransform(mouseY, [-100, 100], [-12, 12])

  function handleMove(e) {
    const rect = el.current.getBoundingClientRect()
    const px = e.clientX - rect.left - rect.width / 2
    const py = e.clientY - rect.top - rect.height / 2

    mouseX.set((px / (rect.width / 2)) * 100)
    mouseY.set((py / (rect.height / 2)) * 100)
  }

  function handleLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.a
      ref={el}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-block group ${className}`}
    >
      {/* Glow depth shadow */}
      <span className="absolute -inset-1 rounded-xl blur-[18px] opacity-40 bg-green-500/40 transition-all duration-500 group-hover:opacity-90 pointer-events-none z-0"></span>

      {/* Button surface */}
      <span className="relative z-10 block rounded-xl px-7 py-3 text-white font-semibold bg-gradient-to-r from-green-600 to-green-500 shadow-xl transform-gpu">

        {/* sheen overlay */}
        <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></span>
        </span>

        <span className="relative z-20">{children}</span>
      </span>

      {/* Subtle inner chrome ring */}
      <span className="absolute -inset-2 rounded-xl border border-green-500/20 z-5 pointer-events-none"></span>
    </motion.a>
  )
}
