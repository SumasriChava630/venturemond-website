"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const projects = [
  { slug: 'project-alpha', title: 'Project Alpha', img: '/images/project/alpha.jpg', category: 'Web Design' },
  { slug: 'project-beta', title: 'Project Beta', img: '/images/project/beta.jpg', category: 'Mobile App' },
  { slug: 'project-gamma', title: 'Project Gamma', img: '/images/project/gamma.jpg', category: 'Branding' },
]

const partners = [
  "Google", "Meta", "Apple", "Microsoft", "Amazon", "Netflix", "Tesla", "Adobe",
  "Salesforce", "Oracle", "IBM", "Intel", "Nvidia", "Spotify", "Uber", "Airbnb",
  "Twitter", "LinkedIn", "Shopify", "Stripe", "PayPal", "Zoom"
]

export default function ProjectsPreview() {
  const [darkMode, setDarkMode] = useState(false)

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

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* PROJECTS SECTION */}
      <section id="projects" className={`py-16 relative overflow-hidden scroll-mt-20 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800' 
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
      }`}>
        
        {/* Decorative Elements */}
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 ${
          darkMode ? 'bg-green-500/20 opacity-30' : 'bg-green-200 opacity-20'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 ${
          darkMode ? 'bg-blue-500/20 opacity-30' : 'bg-blue-200 opacity-20'
        }`}></div>
        
        {/* Geometric Pattern */}
        <div className={`absolute inset-0 ${darkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: darkMode 
              ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Enhanced Section Header with Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                darkMode 
                  ? 'bg-green-900/40 text-green-400 border border-green-800' 
                  : 'bg-green-100 text-green-700'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                Portfolio
              </span>
            </motion.div>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Selected Projects
            </h2>
            <p className={`text-base md:text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Discover our recent work and creative solutions
            </p>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className={`w-12 h-1 rounded-full ${
                darkMode ? 'bg-green-500' : 'bg-green-600'
              }`}></div>
              <div className={`w-3 h-3 rounded-full ${
                darkMode ? 'bg-green-500' : 'bg-green-600'
              }`}></div>
              <div className={`w-12 h-1 rounded-full ${
                darkMode ? 'bg-green-500' : 'bg-green-600'
              }`}></div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.15,
                  ease: "easeOut"
                }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                      : 'bg-white border-slate-100 hover:border-green-600'
                  }`}>
                    
                    {/* Image Container */}
                    <div className={`relative w-full h-64 overflow-hidden ${
                      darkMode 
                        ? 'bg-gradient-to-br from-slate-700 to-slate-800' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200'
                    }`}>
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1.5 text-white text-xs font-semibold rounded-full mb-2 ${
                            darkMode ? 'bg-green-500' : 'bg-green-600'
                          }`}>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"/>
                            </svg>
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className={`p-6 ${
                      darkMode 
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
                        : 'bg-gradient-to-br from-white to-slate-50'
                    }`}>
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        darkMode 
                          ? 'text-white group-hover:text-green-400' 
                          : 'text-slate-900 group-hover:text-green-600'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <div className={`flex items-center transition-colors duration-300 ${
                        darkMode 
                          ? 'text-slate-400 group-hover:text-green-400' 
                          : 'text-slate-600 group-hover:text-green-600'
                      }`}>
                        <span className="text-sm font-medium">View project</span>
                        <motion.svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </motion.svg>
                      </div>
                    </div>

                    {/* Animated Corner Accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ${
                      darkMode 
                        ? 'bg-gradient-to-br from-green-500/20 to-transparent' 
                        : 'bg-gradient-to-br from-green-600/20 to-transparent'
                    }`}></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link 
              href="/projects"
              className={`inline-flex items-center gap-2 px-10 py-5 font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-500 hover:to-green-600 shadow-green-600/30' 
                  : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-green-600/30'
              }`}
            >
              <span>View All Projects</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className={`py-12 relative overflow-hidden transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-b from-slate-800 to-slate-900' 
          : 'bg-gradient-to-b from-slate-50 to-white'
      }`}>
        
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${
          darkMode 
            ? 'from-green-500/10 via-transparent to-transparent' 
            : 'from-green-100/20 via-transparent to-transparent'
        }`}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Trusted by Industry Leaders
            </h2>
            <p className={`text-sm md:text-base ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Partnering with the world's most innovative companies
            </p>
          </motion.div>

          {/* Infinite Scrolling Container */}
          <div className="relative">
            
            {/* Fade Edges */}
            <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 ${
              darkMode 
                ? 'bg-gradient-to-r from-slate-900 to-transparent' 
                : 'bg-gradient-to-r from-white to-transparent'
            }`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 ${
              darkMode 
                ? 'bg-gradient-to-l from-slate-900 to-transparent' 
                : 'bg-gradient-to-l from-white to-transparent'
            }`}></div>

            {/* Scrolling Track */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-12 py-6"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* First Set */}
                {partners.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className={`flex-shrink-0 w-48 h-24 rounded-xl border-2 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group ${
                      darkMode 
                        ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                        : 'bg-white border-slate-200 hover:border-green-600'
                    }`}
                  >
                    <span className={`text-xl font-bold transition-colors ${
                      darkMode 
                        ? 'text-slate-300 group-hover:text-green-400' 
                        : 'text-slate-700 group-hover:text-green-600'
                    }`}>
                      {partner}
                    </span>
                  </div>
                ))}
                
                {/* Duplicate Set for Seamless Loop */}
                {partners.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className={`flex-shrink-0 w-48 h-24 rounded-xl border-2 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group ${
                      darkMode 
                        ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                        : 'bg-white border-slate-200 hover:border-green-600'
                    }`}
                  >
                    <span className={`text-xl font-bold transition-colors ${
                      darkMode 
                        ? 'text-slate-300 group-hover:text-green-400' 
                        : 'text-slate-700 group-hover:text-green-600'
                    }`}>
                      {partner}
                    </span>
                  </div>
                ))}

                {/* Third Set for Extra Smooth Loop */}
                {partners.map((partner, index) => (
                  <div
                    key={`third-${index}`}
                    className={`flex-shrink-0 w-48 h-24 rounded-xl border-2 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group ${
                      darkMode 
                        ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                        : 'bg-white border-slate-200 hover:border-green-600'
                    }`}
                  >
                    <span className={`text-xl font-bold transition-colors ${
                      darkMode 
                        ? 'text-slate-300 group-hover:text-green-400' 
                        : 'text-slate-700 group-hover:text-green-600'
                    }`}>
                      {partner}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
