"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }

    // If we're on the home page, scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-900 text-white'
    }`}>
      
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            
            {/* Company Info */}
            <div className="text-center sm:text-left">
              <Link href="/">
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 cursor-pointer hover:text-green-300 transition-colors ${
                  darkMode ? 'text-green-400' : 'text-green-400'
                }`}>Venturemond</h3>
              </Link>
              <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                A next-generation venture studio and SaaS company transforming ideas into reality.
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                <a href="https://twitter.com/venturemond" target="_blank" rel="noopener noreferrer" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-slate-900 hover:bg-green-600' : 'bg-slate-800 hover:bg-green-600'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/venturemond" target="_blank" rel="noopener noreferrer" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-slate-900 hover:bg-green-600' : 'bg-slate-800 hover:bg-green-600'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://github.com/venturemond" target="_blank" rel="noopener noreferrer" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-slate-900 hover:bg-green-600' : 'bg-slate-800 hover:bg-green-600'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://dribbble.com/venturemond" target="_blank" rel="noopener noreferrer" className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-slate-900 hover:bg-green-600' : 'bg-slate-800 hover:bg-green-600'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.249.881-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    About
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base w-full text-center sm:text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('projects')} 
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base w-full text-center sm:text-left"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    Careers
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base w-full text-center sm:text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base block">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Contact Info</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 text-slate-400 justify-center sm:justify-start">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@venturemond.com" className="hover:text-green-400 transition-colors text-sm sm:text-base break-all">
                    hello@venturemond.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-slate-400 justify-center sm:justify-start">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15551234567" className="hover:text-green-400 transition-colors text-sm sm:text-base">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-2 text-slate-400 justify-center sm:justify-start">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base">Hyderabad, India</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${darkMode ? 'border-slate-900' : 'border-slate-800'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-slate-400 text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} Venturemond. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <Link href="/privacy-policy" className="text-slate-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
