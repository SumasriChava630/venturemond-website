"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState, useRef } from "react"

function Counter({ target, label, darkMode }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated.current) return

      const element = document.getElementById('stats-section')
      if (!element) return

      const rect = element.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

      if (isVisible) {
        hasAnimated.current = true
        const controls = animate(count, target, { duration: 2.5, ease: "easeOut" })
        
        return () => controls.stop()
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [count, target])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <div className="text-center">
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${
        darkMode ? 'text-green-400' : 'text-green-600'
      }`}>
        {displayValue}+
      </div>
      <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check for dark mode
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  // Calculate color based on mouse position - ONLY on client
  const getGradientColor = () => {
    if (typeof window === 'undefined') return darkMode ? 'hsl(120, 70%, 20%)' : 'hsl(120, 70%, 90%)'
    
    const x = mousePosition.x / window.innerWidth
    const y = mousePosition.y / window.innerHeight
    
    // Interpolate between different green shades
    const hue = 120 + (x * 60) // Green to cyan range
    const lightness = darkMode ? 15 + (y * 10) : 85 + (y * 10) // Darker for dark mode
    
    return `hsl(${hue}, 70%, ${lightness}%)`
  }

  const getHueRotation = () => {
    if (typeof window === 'undefined') return 0
    return (mousePosition.x / window.innerWidth) * 60
  }

  return (
    <section id="hero" className={`relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      
      {/* Animated Background Logo - Interactive */}
      {isMounted && (
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${getGradientColor()}, transparent 50%)`
          }}
        >
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: darkMode ? 0.15 : 0.08, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-[150%] h-[150%] max-w-none"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: `hue-rotate(${getHueRotation()}deg)`,
              transition: 'filter 0.3s ease'
            }}
          >
            {/* Futuristic V Logo */}
            <g transform="translate(100, 100)">
              {/* Outer hexagon */}
              <path
                d="M 0,-80 L 69,-40 L 69,40 L 0,80 L -69,40 L -69,-40 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className={darkMode ? 'text-green-500' : 'text-green-400'}
                opacity="0.6"
              />
              
              {/* Inner V shape */}
              <path
                d="M -40,-30 L 0,30 L 40,-30"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className={darkMode ? 'text-green-400' : 'text-green-500'}
              />
              
              {/* Circuit pattern lines */}
              <line x1="-50" y1="-50" x2="-30" y2="-30" stroke="currentColor" strokeWidth="1.5" className={darkMode ? 'text-green-500' : 'text-green-400'} opacity="0.5"/>
              <line x1="50" y1="-50" x2="30" y2="-30" stroke="currentColor" strokeWidth="1.5" className={darkMode ? 'text-green-500' : 'text-green-400'} opacity="0.5"/>
              <line x1="-50" y1="50" x2="-30" y2="30" stroke="currentColor" strokeWidth="1.5" className={darkMode ? 'text-green-500' : 'text-green-400'} opacity="0.5"/>
              <line x1="50" y1="50" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" className={darkMode ? 'text-green-500' : 'text-green-400'} opacity="0.5"/>
              
              {/* Corner dots */}
              <circle cx="-55" cy="-55" r="3" fill="currentColor" className={darkMode ? 'text-green-400' : 'text-green-500'} opacity="0.7"/>
              <circle cx="55" cy="-55" r="3" fill="currentColor" className={darkMode ? 'text-green-400' : 'text-green-500'} opacity="0.7"/>
              <circle cx="-55" cy="55" r="3" fill="currentColor" className={darkMode ? 'text-green-400' : 'text-green-500'} opacity="0.7"/>
              <circle cx="55" cy="55" r="3" fill="currentColor" className={darkMode ? 'text-green-400' : 'text-green-500'} opacity="0.7"/>
              
              {/* Tech rings */}
              <circle cx="0" cy="0" r="55" stroke="currentColor" strokeWidth="1" fill="none" className={darkMode ? 'text-green-400' : 'text-green-300'} opacity="0.3" strokeDasharray="5,5"/>
              <circle cx="0" cy="0" r="65" stroke="currentColor" strokeWidth="1" fill="none" className={darkMode ? 'text-green-400' : 'text-green-300'} opacity="0.2" strokeDasharray="3,3"/>
            </g>
          </motion.svg>
        </div>
      )}

      {/* Subtle Background Pattern */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}>
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-[radial-gradient(#10b981_1px,transparent_1px)]' 
            : 'bg-[radial-gradient(#1D3557_1px,transparent_1px)]'
        } [background-size:32px_32px]`}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* Small Tag/Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium shadow-sm ${
            darkMode 
              ? 'bg-slate-800/80 border border-slate-700 text-slate-300' 
              : 'bg-slate-50/80 border border-slate-200 text-slate-700'
          }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${
              darkMode ? 'bg-green-400' : 'bg-green-600'
            }`}></span>
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-5xl md:text-7xl font-bold leading-tight text-center mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          We design & build <br />
          <span className={`relative ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            digital products
            <motion.span
              className={`absolute -inset-2 rounded-lg -z-10 ${
                darkMode ? 'bg-green-400/10' : 'bg-green-100/30'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </span> <br />
          that users love.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Full-stack development, UX-led design and brand strategy for startups & enterprises. 
          Crafting digital experiences with precision and purpose.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact"
            className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              darkMode 
                ? 'bg-green-600 text-white hover:bg-green-500 shadow-green-600/20 hover:shadow-green-600/30' 
                : 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/20 hover:shadow-green-600/30'
            }`}
          >
            Get in touch
          </a>
          
          <a 
            href="#services"
            className={`px-8 py-4 font-semibold rounded-lg backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
              darkMode 
                ? 'bg-slate-800/50 text-slate-200 border-slate-700 hover:border-slate-600 hover:bg-slate-800/70' 
                : 'bg-white/80 text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            Our Services
          </a>
        </motion.div>

        {/* Trust Indicators / Stats with Counter Animation */}
        <motion.div
          id="stats-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <Counter target={150} label="Projects Delivered" darkMode={darkMode} />
          <Counter target={98} label="Client Satisfaction" darkMode={darkMode} />
          <Counter target={50} label="Happy Clients" darkMode={darkMode} />
          
          <div className="text-center">
            <div className={`text-3xl md:text-4xl font-bold mb-2 ${
              darkMode ? 'text-green-400' : 'text-green-600'
            }`}>24/7</div>
            <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Support Available
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Wave Separator */}
      <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${
        darkMode ? 'from-slate-800 to-transparent' : 'from-slate-50 to-transparent'
      }`}></div>
      
    </section>
  )
}
