'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay } }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
