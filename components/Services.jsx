"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const items = useMemo(() => [
    {
      title: "Venture Studio",
      body: "Research, MVP, Go-to-Market",
      link: "/studio",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "From idea to product — we build ventures that scale. Co-build partnerships for founders and startups."
    },
    {
      title: "SaaS Division",
      body: "Workspace, Automate, CRM, AI Tools",
      link: "/saas",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      description: "Building smarter software for the modern world. Privacy-first, scalable, design-driven SaaS products."
    },
    {
      title: "Custom Solutions",
      body: "Full-stack development, UI/UX, Strategy",
      link: "/#contact",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "Tailored technology solutions for your specific business needs and growth objectives."
    }
  ], [])

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 3000)

    return () => {
      clearInterval(timer)
      observer.disconnect()
    }
  }, [items.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="services" className={`py-16 relative overflow-hidden scroll-mt-20 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      
      {/* Subtle Background Pattern */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}>
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,#1D3557_1px,transparent_1px),linear-gradient(to_bottom,#1D3557_1px,transparent_1px)]'
        } bg-[size:4rem_4rem]`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Our Services
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Slide Content */}
          <div className="min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <Link href={items[currentIndex].link}>
                  <div className={`rounded-2xl p-8 shadow-lg border transition-colors duration-300 cursor-pointer hover:scale-105 ${
                    darkMode 
                      ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-green-500' 
                      : 'bg-gradient-to-br from-slate-50 to-white border-slate-200 hover:border-green-600'
                  }`}>
                    
                    {/* Service Icon */}
                    <div className="flex justify-center mb-5">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center border p-4 transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-green-900/30 border-green-800 text-green-400' 
                          : 'bg-green-50 border-green-100 text-green-600'
                      }`}>
                        {items[currentIndex].icon}
                      </div>
                    </div>

                    <h3 className={`text-2xl md:text-3xl font-bold text-center mb-3 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {items[currentIndex].title}
                    </h3>

                    <p className={`font-semibold text-center text-base mb-4 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {items[currentIndex].body}
                    </p>

                    <p className={`text-center text-base max-w-xl mx-auto leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {items[currentIndex].description}
                    </p>

                    <div className="flex justify-center mt-6">
                      <span className={`inline-flex items-center gap-2 font-semibold ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}>
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>

                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-5">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? darkMode 
                      ? "w-10 h-2.5 bg-green-500" 
                      : "w-10 h-2.5 bg-green-600"
                    : darkMode
                      ? "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-600"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-md mx-auto">
            <div className={`h-1 rounded-full overflow-hidden ${
              darkMode ? 'bg-slate-800' : 'bg-slate-200'
            }`}>
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
                className={`h-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}
              />
            </div>
          </div>

        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Link key={item.title} href={item.link}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-4 rounded-lg border transition-all duration-300 text-left cursor-pointer ${
                  index === currentIndex
                    ? darkMode
                      ? "border-green-500 bg-green-900/20 shadow-md"
                      : "border-green-600 bg-green-50 shadow-md"
                    : darkMode
                      ? "border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center p-2 transition-colors duration-300 ${
                    index === currentIndex 
                      ? darkMode 
                        ? 'bg-green-900/40 text-green-400' 
                        : 'bg-green-100 text-green-600'
                      : darkMode
                        ? 'bg-slate-700 text-slate-400'
                        : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.icon}
                  </div>
                  <h4 className={`text-base font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{item.title}</h4>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>{item.body}</p>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
