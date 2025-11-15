"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function AboutPreview() {
  const [showTeam, setShowTeam] = useState(false)
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="about" className={`py-24 scroll-mt-20 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-white to-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Venturemond
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Transforming ideas into digital experiences since 2020
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <h3 className={`text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                We Create Digital Magic
              </h3>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                We are a digital agency passionate about shaping experiences that help brands grow. 
                Our team blends creativity, strategy, and engineering to build products users love.
              </p>

              <p className={`leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                From startups to enterprises, we've partnered with ambitious teams to craft 
                exceptional digital solutions. Our approach combines data-driven insights with 
                innovative design thinking to deliver results that matter.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div>
                  <div className={`text-4xl font-bold mb-2 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>150+</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>Projects</div>
                </div>
                <div>
                  <div className={`text-4xl font-bold mb-2 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>50+</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>Clients</div>
                </div>
                <div>
                  <div className={`text-4xl font-bold mb-2 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>5+</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>Years</div>
                </div>
              </div>

              <a
                href="/about"
                className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-green-600 text-white hover:bg-green-500' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Explore More
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
              </a>
            </div>
          </motion.div>

          {/* Image Section with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about/about1.jpg"
                alt="About Venturemond"
                fill
                className="object-cover"
              />
              {/* Green Overlay Gradient */}
              <div className={`absolute inset-0 ${
                darkMode 
                  ? 'bg-gradient-to-tr from-green-500/30 to-transparent' 
                  : 'bg-gradient-to-tr from-green-600/20 to-transparent'
              }`}></div>
            </motion.div>

            {/* Floating Accent Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className={`absolute -bottom-8 -left-8 p-6 rounded-xl shadow-xl border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-green-900/40' : 'bg-green-100'
                }`}>
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>98%</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl ${
                darkMode ? 'bg-green-500/30' : 'bg-green-200'
              }`}
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl ${
                darkMode ? 'bg-green-500/30' : 'bg-green-200'
              }`}
            />
          </motion.div>

        </div>

        {/* Our Values/Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Our Approach
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation First",
                description: "We leverage cutting-edge technologies and creative thinking to deliver solutions that push boundaries."
              },
              {
                icon: "🎯",
                title: "Results Driven",
                description: "Every project is measured by real business impact. We focus on metrics that matter to your success."
              },
              {
                icon: "🤝",
                title: "Partnership Mindset",
                description: "Your success is our success. We collaborate closely to ensure we're aligned with your vision and goals."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-20 rounded-3xl p-12 text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-800' 
              : 'bg-gradient-to-r from-green-50 to-green-100'
          }`}
        >
          <h3 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Meet Our Talented Team
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A diverse group of designers, developers, and strategists united by a passion for excellence.
          </p>
          <button
            onClick={() => setShowTeam(!showTeam)}
            className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 border-2 ${
              darkMode 
                ? 'bg-slate-800 text-green-400 border-green-500 hover:bg-green-500 hover:text-white' 
                : 'bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white'
            }`}
          >
            {showTeam ? 'Hide Team' : 'View Team'}
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${showTeam ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>

          {/* Team Profile - Toggleable */}
          <AnimatePresence>
            {showTeam && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className={`max-w-md mx-auto rounded-2xl shadow-xl border p-8 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}>
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    KM
                  </div>

                  {/* Name */}
                  <h4 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Kavyanth Munagala
                  </h4>

                  {/* Role */}
                  <p className={`font-semibold mb-4 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    Founder & CEO
                  </p>

                  {/* Email */}
                  <a 
                    href="mailto:kavyanth.munagala@venturemond.com"
                    className={`inline-flex items-center gap-2 transition-colors mb-6 ${
                      darkMode 
                        ? 'text-slate-400 hover:text-green-400' 
                        : 'text-slate-600 hover:text-green-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    kavyanth.munagala@venturemond.com
                  </a>

                  {/* Bio */}
                  <p className={`leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Passionate about creating innovative digital solutions that drive business growth. 
                    With over 5 years of experience, Kavyanth leads our team in delivering exceptional 
                    results for clients worldwide.
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mt-6">
                    <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      darkMode 
                        ? 'bg-slate-700 hover:bg-green-600 hover:text-white' 
                        : 'bg-slate-100 hover:bg-green-600 hover:text-white'
                    }`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      darkMode 
                        ? 'bg-slate-700 hover:bg-green-600 hover:text-white' 
                        : 'bg-slate-100 hover:bg-green-600 hover:text-white'
                    }`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
