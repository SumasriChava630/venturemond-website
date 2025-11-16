"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [darkMode, setDarkMode] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth spring physics for animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Advanced parallax transformations
  const y1 = useTransform(smoothProgress, [0, 1], [0, -300])
  const y2 = useTransform(smoothProgress, [0, 1], [0, -150])
  const y3 = useTransform(smoothProgress, [0, 1], [0, -450])
  const opacity1 = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 0.5, 0])
  const opacity2 = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 1, 0])
  const opacity3 = useTransform(smoothProgress, [0.4, 0.7, 1], [0, 1, 0.3])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.2])
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360])
  const rotateReverse = useTransform(smoothProgress, [0, 1], [0, -360])

  // Grid animation
  const gridOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.03, 0.08, 0.08, 0.03])
  const gridScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1])

  useEffect(() => {
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

    // Set window size on client
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [])

  const companyData = {
    founded: "2020",
    location: "Hyderabad, Telangana, India",
    founders: ["Kavyanth Munagala"],
    focusAreas: [
      { name: "AI", icon: "🤖", color: "from-purple-500 to-pink-500" },
      { name: "Logistics", icon: "🚚", color: "from-blue-500 to-cyan-500" },
      { name: "Sustainability", icon: "🌱", color: "from-green-500 to-emerald-500" },
      { name: "Education", icon: "📚", color: "from-orange-500 to-red-500" },
      { name: "Agritech", icon: "🌾", color: "from-yellow-500 to-green-500" }
    ],
    services: [
      {
        title: "Venture Studio",
        description: "Partners with startups for research, validation, MVP building, roadmap definition, and go-to-market strategy.",
        icon: "🚀"
      },
      {
        title: "SaaS Division",
        description: "Builds proprietary software-as-a-service products, starting with Venturemond Cloud Desk.",
        icon: "☁️"
      },
      {
        title: "Product Strategy",
        description: "Strategic planning and execution for technology-driven products.",
        icon: "📊"
      },
      {
        title: "Growth Enablement",
        description: "Comprehensive support to scale tech-enabled ventures.",
        icon: "📈"
      }
    ]
  }

  // Generate particles only on client side
  const particles = windowSize.width > 0 ? [...Array(15)].map((_, i) => ({
    id: i,
    initialX: Math.random() * windowSize.width,
    initialY: Math.random() * windowSize.height,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2
  })) : []

  return (
    <div ref={containerRef} className={`relative transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      
      {/* UNIFIED FIXED BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Base gradient background */}
        <motion.div 
          className={`absolute inset-0 transition-colors duration-300 ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-900 via-slate-800/30 to-slate-900' 
              : 'bg-gradient-to-br from-white via-green-50/30 to-slate-50'
          }`}
          style={{
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 1])
          }}
        />
        
        {/* Rotating gradient orbs */}
        <motion.div
          style={{ rotate, x: y1, y: y2 }}
          className={`absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            darkMode 
              ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' 
              : 'bg-gradient-to-br from-green-400/30 to-blue-400/30'
          }`}
        />
        <motion.div
          style={{ rotate: rotateReverse, y: y1 }}
          className={`absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl ${
            darkMode 
              ? 'bg-gradient-to-tr from-cyan-500/15 to-green-500/15' 
              : 'bg-gradient-to-tr from-cyan-400/25 to-green-400/25'
          }`}
        />
        <motion.div
          style={{ rotate, y: y3, opacity: opacity2 }}
          className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            darkMode 
              ? 'bg-gradient-to-br from-green-500/15 to-emerald-500/15' 
              : 'bg-gradient-to-br from-green-300/20 to-emerald-300/20'
          }`}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: particle.initialX, 
              y: particle.initialY 
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay
            }}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-green-400' : 'bg-green-500'
            }`}
            style={{
              left: particle.left,
              top: particle.top
            }}
          />
        ))}

        {/* Animated grid */}
        <motion.div
          style={{ opacity: gridOpacity, scale: gridScale }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 ${
            darkMode 
              ? 'bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)]' 
              : 'bg-[linear-gradient(to_right,#10b98150_1px,transparent_1px),linear-gradient(to_bottom,#10b98150_1px,transparent_1px)]'
          } bg-[size:4rem_4rem]`}></div>
        </motion.div>

        {/* Radial gradient following mouse */}
        {windowSize.width > 0 && (
          <motion.div
            animate={{
              background: darkMode 
                ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1), transparent 80%)` 
                : `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`
            }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
            className="absolute inset-0"
          />
        )}

        {/* Scan lines effect */}
        <motion.div
          style={{ opacity: opacity3 }}
          className={`absolute inset-0 bg-[length:100%_3px] pointer-events-none ${
            darkMode 
              ? 'bg-[linear-gradient(0deg,transparent_0%,rgba(16,185,129,0.03)_2%,transparent_4%)]' 
              : 'bg-[linear-gradient(0deg,transparent_0%,rgba(16,185,129,0.05)_2%,transparent_4%)]'
          }`}
          animate={{ backgroundPositionY: ["0px", "100px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Geometric shapes */}
        <motion.svg
          style={{ rotate, opacity: opacity2 }}
          className="absolute top-1/4 left-1/4 w-64 h-64"
          viewBox="0 0 200 200"
        >
          <motion.path
            d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z"
            stroke={darkMode ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.3)"}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        <motion.svg
          style={{ rotate: rotateReverse, opacity: opacity3 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48"
          viewBox="0 0 200 200"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke={darkMode ? "rgba(16, 185, 129, 0.25)" : "rgba(16, 185, 129, 0.3)"}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
          <motion.div
            style={{ scale, opacity: opacity1 }}
            className="text-center z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`w-96 h-96 border-2 rounded-full ${
                  darkMode ? 'border-green-500/15' : 'border-green-500/20'
                }`}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-6xl md:text-8xl font-bold mb-6 relative z-10 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              About <span className={`relative ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}>
                Venturemond
                <motion.span
                  animate={{
                    scaleX: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    times: [0, 0.3, 0.7, 1]
                  }}
                  className={`absolute bottom-0 left-0 right-0 h-1 origin-left ${
                    darkMode ? 'bg-green-400' : 'bg-green-600'
                  }`}
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed relative z-10 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              A next-generation venture studio and SaaS company transforming ideas into reality
            </motion.p>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 relative overflow-hidden ${
              darkMode ? 'border-green-500' : 'border-green-600'
            }`}>
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-1 h-2 rounded-full ${
                  darkMode ? 'bg-green-500' : 'bg-green-600'
                }`}
              />
            </div>
          </motion.div>
        </section>

        {/* Company Overview Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Who We Are
                </motion.h2>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`text-lg leading-relaxed mb-6 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Venturemond is a next-generation venture studio and SaaS company based in Hyderabad. We partner with founders and businesses to design, build, and scale technology-driven products while developing our own suite of SaaS solutions.
                </motion.p>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`text-lg leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Our mission is to make startup execution faster, more strategic, and outcome-driven through our full-stack venture studio model and innovative SaaS division.
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { label: "Founded", value: companyData.founded },
                  { label: "Location", value: "Hyderabad, IN" },
                  { label: "Focus Areas", value: "5+" },
                  { label: "Industries", value: "Multiple" }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                    className={`backdrop-blur-sm p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
                      darkMode 
                        ? 'bg-slate-800/60 border-green-800 hover:border-green-500' 
                        : 'bg-white/60 border-green-100 hover:border-green-600'
                    }`}
                  >
                    <motion.div
                      className={`absolute inset-0 ${
                        darkMode 
                          ? 'bg-gradient-to-br from-green-500/10 to-transparent' 
                          : 'bg-gradient-to-br from-green-400/10 to-transparent'
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className={`text-3xl font-bold mb-2 relative z-10 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}>{stat.value}</div>
                    <div className={`text-sm relative z-10 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              What We Do
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {companyData.services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`backdrop-blur-md p-8 rounded-3xl shadow-lg border-2 transition-all duration-300 relative overflow-hidden group ${
                    darkMode 
                      ? 'bg-slate-800/70 border-slate-700 hover:border-green-500' 
                      : 'bg-white/70 border-slate-100 hover:border-green-600'
                  }`}
                >
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode 
                        ? 'bg-gradient-to-br from-green-500/10 to-transparent' 
                        : 'bg-gradient-to-br from-green-500/10 to-transparent'
                    }`}
                  />
                  <div className="text-5xl mb-4 relative z-10">{service.icon}</div>
                  <h3 className={`text-2xl font-bold mb-3 relative z-10 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{service.title}</h3>
                  <p className={`leading-relaxed relative z-10 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Our Focus Areas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-center text-lg mb-16 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              We specialize in cutting-edge technologies across multiple industries
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyData.focusAreas.map((area, idx) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="relative group"
                >
                  <div className={`relative backdrop-blur-md p-8 rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl ${
                    darkMode 
                      ? 'bg-slate-800/70 border-slate-700 hover:border-green-500' 
                      : 'bg-white/70 border-slate-200 hover:border-green-500'
                  }`}>
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.color} opacity-10 rounded-full blur-2xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.2
                      }}
                    />
                    
                    <div className="text-6xl mb-4">{area.icon}</div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>{area.name}</h3>
                    <div className={`h-1 w-16 bg-gradient-to-r ${area.color} rounded-full`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Dark overlay for contrast */}
          <div className={`absolute inset-0 backdrop-blur-sm ${
            darkMode 
              ? 'bg-gradient-to-br from-green-700/95 via-green-800/95 to-emerald-900/95' 
              : 'bg-gradient-to-br from-green-600/95 via-green-700/95 to-emerald-800/95'
          }`}></div>
          
          {/* Animated mesh gradient */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)",
              backgroundSize: "200% 200%"
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left side - Content */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
                >
                  ✨ Let's Collaborate
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Vision?
                </h2>
                <p className="text-xl text-green-50 mb-8 leading-relaxed">
                  Join forces with Venturemond to build innovative, scalable solutions that make an impact. Let's create something extraordinary together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="/#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-all duration-300"
                  >
                    View Our Work
                  </motion.a>
                </div>
              </motion.div>

              {/* Right side - Stats Cards */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { number: "150+", label: "Projects Delivered", icon: "🚀" },
                  { number: "98%", label: "Client Satisfaction", icon: "⭐" },
                  { number: "50+", label: "Happy Clients", icon: "🤝" },
                  { number: "24/7", label: "Support Available", icon: "💬" }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-green-100">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
