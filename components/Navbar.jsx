"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollToSection = (sectionId) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      setOpen(false)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  const navigateHome = () => {
    if (pathname !== '/') {
      router.push('/')
    } else {
      scrollToSection('hero')
    }
    setOpen(false)
  }

  const navigateToPage = (path) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full z-[999]
        ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} 
        backdrop-blur-md
        ${darkMode ? 'border-slate-700' : 'border-slate-200'}
        border-b
        shadow-sm
      `}
    >
      <div className="w-full flex justify-between items-center py-4 px-8 md:px-12 lg:px-16">
        
        {/* Logo */}
        <button 
          onClick={navigateHome}
          className={`text-2xl font-bold transition-colors cursor-pointer ${
            darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'
          }`}
        >
          Venturemond
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <button 
            onClick={navigateHome}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            Home
          </button>
          
          <button 
            onClick={() => navigateToPage('/studio')}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            Studio
          </button>
          
          <button 
            onClick={() => navigateToPage('/saas')}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            SaaS
          </button>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            Projects
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            About
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Blog Button */}
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            Blog
          </Link>

          {/* Careers Button */}
          <Link
            href="/careers"
            onClick={() => setOpen(false)}
            className={`font-medium transition-colors cursor-pointer ${
              darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
            }`}
          >
            Careers
          </Link>

          <button 
            onClick={() => scrollToSection('contact')}
            className="
              px-6 py-2.5 
              bg-green-600 text-white 
              font-semibold rounded-lg
              hover:bg-green-700 
              transition-all duration-300
              shadow-sm hover:shadow-md
              cursor-pointer
            "
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${
            darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
          }`}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {open ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden border-t shadow-lg ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            <button 
              onClick={navigateHome}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              Home
            </button>
            
            <button 
              onClick={() => navigateToPage('/studio')}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              Studio
            </button>
            
            <button 
              onClick={() => navigateToPage('/saas')}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              SaaS
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              About
            </button>

            {/* Theme Toggle in Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-2 font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              {darkMode ? (
                <>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  Dark Mode
                </>
              )}
            </button>

            {/* Blog Link in Mobile */}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              Blog
            </Link>

            {/* Careers Link in Mobile */}
            <Link
              href="/careers"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors py-2 text-left ${
                darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-600'
              }`}
            >
              Careers
            </Link>

            <button 
              onClick={() => scrollToSection('contact')}
              className="
                px-6 py-3 
                bg-green-600 text-white 
                font-semibold rounded-lg
                hover:bg-green-700 
                transition-all duration-300
                text-center
                shadow-sm
              "
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
