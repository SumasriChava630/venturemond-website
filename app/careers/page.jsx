"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CareersPage() {
  const [darkMode, setDarkMode] = useState(false)

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

  const openings = [
    {
      title: "Full Stack Developer",
      experience: "0-3 years",
      type: "Full-time",
      location: "Hyderabad / Remote",
      description: "Join our team to build cutting-edge web applications using Next.js, React, Node.js, and modern cloud technologies.",
      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB/PostgreSQL"]
    },
    {
      title: "Business Development Executive",
      experience: "0-3 years",
      type: "Full-time",
      location: "Hyderabad",
      description: "Drive growth by identifying new business opportunities, building client relationships, and contributing to our sales strategy.",
      skills: ["Communication", "Sales", "Client Relations", "Market Research", "Negotiation"]
    }
  ]

  const values = [
    {
      icon: "🚀",
      title: "Execution First",
      description: "We move fast and deliver results. Ideas mean nothing without execution."
    },
    {
      icon: "🎯",
      title: "Ownership Culture",
      description: "Take ownership of your work. We trust you to make decisions and drive outcomes."
    },
    {
      icon: "🌱",
      title: "Continuous Growth",
      description: "Learn from real projects, real challenges, and real impact on startups and businesses."
    },
    {
      icon: "🤝",
      title: "Founder-Led",
      description: "Work directly with founders. Your work directly impacts the company's direction."
    }
  ]

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-green-50 to-white'
      }`}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
              darkMode ? 'bg-green-500/10' : 'bg-green-200/30'
            }`}
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
              darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                darkMode 
                  ? 'bg-green-900/30 text-green-400 border border-green-800' 
                  : 'bg-green-100 text-green-700'
              }`}
            >
              🌟 We're Hiring
            </motion.div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Join the <span className={darkMode ? 'text-green-400' : 'text-green-600'}>Venturemond</span> Journey
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Build products that matter. Work with founders who care. Grow faster than anywhere else.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a 
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Open Positions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Our Culture
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              We're a founder-led team focused on execution, innovation, and real impact. No corporate bureaucracy—just builders building.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600'
                }`}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {value.title}
                </h3>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Open Positions
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Join our growing team and make an impact from day one
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600'
                }`}
              >
                {/* Hover Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-green-500/10 to-transparent' 
                      : 'bg-gradient-to-r from-green-500/5 to-transparent'
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                        }`}>
                          {job.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          📍 {job.location}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          💼 {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`mb-4 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {job.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 rounded-lg text-sm ${
                            darkMode 
                              ? 'bg-slate-700/50 text-slate-300' 
                              : 'bg-slate-50 text-slate-600 border border-slate-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={`mailto:hello@venturemond.com?subject=Application for ${job.title}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Application Process
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Simple, transparent, and founder-led
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Send your resume and LinkedIn profile to hello@venturemond.com"
              },
              {
                step: "02",
                title: "Interview",
                description: "Chat with our founders about your skills, experience, and career goals"
              },
              {
                step: "03",
                title: "Join Us",
                description: "Start building amazing products with our team"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 rounded-2xl border text-center ${
                  darkMode 
                    ? 'bg-slate-800/50 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className={`text-5xl font-bold mb-4 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-green-700/95 via-green-800/95 to-emerald-900/95' 
          : 'bg-gradient-to-br from-green-600 via-green-700 to-emerald-800'
      }`}>
        {/* Animated Background */}
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

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Send your resume and LinkedIn profile to start the conversation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@venturemond.com?subject=Career Opportunity at Venturemond"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/venturemond"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
