"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function StudioPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
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

  const pillars = [
    {
      icon: "🔍",
      title: "Research & Validation",
      description: "Market research, user interviews, competitive analysis, and validation frameworks to ensure product-market fit."
    },
    {
      icon: "🚀",
      title: "MVP & Product Development",
      description: "Rapid prototyping, iterative development, and full-stack engineering to bring your vision to life."
    },
    {
      icon: "🗺️",
      title: "Product Roadmaps & Tech Strategy",
      description: "Strategic planning, technology architecture, scalability design, and long-term growth roadmaps."
    },
    {
      icon: "📈",
      title: "Growth & Go-To-Market",
      description: "Launch strategy, customer acquisition, marketing automation, and growth optimization."
    }
  ]

  const buildProcess = [
    { step: "01", title: "Discovery", desc: "Understand vision, validate market, define scope" },
    { step: "02", title: "Design", desc: "UX research, wireframes, prototypes, user testing" },
    { step: "03", title: "Build", desc: "Agile development, weekly sprints, continuous delivery" },
    { step: "04", title: "Launch", desc: "Deployment, monitoring, user onboarding, feedback loops" },
    { step: "05", title: "Scale", desc: "Optimization, feature expansion, growth strategies" }
  ]

  const advantages = [
    { feature: "Speed to Market", studio: "60-90 days", traditional: "6-12 months" },
    { feature: "Cost Structure", studio: "Equity + Fixed Fee", traditional: "Hourly Billing" },
    { feature: "Team Access", studio: "Full-Stack Team", traditional: "Single Developer" },
    { feature: "Strategic Input", studio: "Included", traditional: "Extra Cost" },
    { feature: "Post-Launch Support", studio: "Ongoing Partnership", traditional: "Limited/None" }
  ]

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      
      {/* Hero Section */}
      <section className={`relative pt-32 pb-24 overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-green-50 to-white'
      }`}>
        
        {/* Animated Background Elements */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  y: [null, -30, 0],
                  scale: [0, 1, 0.8, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  darkMode ? 'bg-green-400' : 'bg-green-600'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 30, repeat: Infinity }}
              className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
                darkMode ? 'bg-green-500/20' : 'bg-green-200/40'
              }`}
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 25, repeat: Infinity }}
              className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-200/40'
              }`}
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                darkMode 
                  ? 'bg-green-900/30 text-green-400 border border-green-800' 
                  : 'bg-green-100 text-green-700'
              }`}
            >
              ⚙️ Venture Studio
            </motion.div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              From Idea to Product —{" "}
              <motion.span 
                className={darkMode ? 'text-green-400' : 'text-green-600'}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                We Build Ventures That Scale
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              We're not an agency. We're your co-build partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="#process">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 font-bold rounded-xl border-2 ${
                    darkMode 
                      ? 'border-green-500 text-green-400 hover:bg-green-900/20' 
                      : 'border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  How We Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Studio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              We're Not an Agency. We're Your Co-Build Partner.
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Traditional agencies build what you ask. We build what you <span className="font-bold text-green-600">need</span>. 
              We validate, strategize, execute, and scale — treating your venture like our own.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🤝", title: "Partnership Model", desc: "Equity + fixed fee — we succeed when you succeed" },
              { emoji: "⚡", title: "Speed & Execution", desc: "60-90 day MVPs, not 6-month estimates" },
              { emoji: "🎯", title: "Founder-Focused", desc: "Weekly syncs, transparent roadmaps, real-time collaboration" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`p-8 rounded-2xl border-2 text-center transition-all ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600 hover:shadow-xl'
                }`}
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              The Four Pillars
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Our complete venture-building framework
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-2xl border-2 relative overflow-hidden group ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600'
                }`}
              >
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    darkMode ? 'bg-gradient-to-br from-green-500/10 to-transparent' : 'bg-gradient-to-br from-green-500/5 to-transparent'
                  }`}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {pillar.title}
                  </h3>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              How We Work
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Our 5-step structured build process
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className={`hidden md:block absolute top-1/2 left-0 right-0 h-1 ${
              darkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} style={{ transform: 'translateY(-50%)' }} />

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {buildProcess.map((process, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold border-4 ${
                      darkMode 
                        ? 'bg-slate-800 border-green-500 text-green-400' 
                        : 'bg-white border-green-600 text-green-600'
                    }`}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {process.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Choose Us */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Why Founders Choose Venturemond
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className={`w-full rounded-2xl overflow-hidden ${
              darkMode ? 'bg-slate-800' : 'bg-white'
            }`}>
              <thead className={darkMode ? 'bg-slate-700' : 'bg-green-600'}>
                <tr>
                  <th className={`p-4 text-left ${darkMode ? 'text-white' : 'text-white'}`}>Feature</th>
                  <th className={`p-4 text-left ${darkMode ? 'text-white' : 'text-white'}`}>Venturemond Studio</th>
                  <th className={`p-4 text-left ${darkMode ? 'text-white' : 'text-white'}`}>Traditional Agency</th>
                </tr>
              </thead>
              <tbody>
                {advantages.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`border-t ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  >
                    <td className={`p-4 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {row.feature}
                    </td>
                    <td className={`p-4 ${darkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                      ✓ {row.studio}
                    </td>
                    <td className={`p-4 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                      {row.traditional}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-green-800' 
                : 'bg-gradient-to-br from-green-50 to-white border-green-200'
            }`}
          >
            <div className="text-5xl mb-6 text-center">💭</div>
            <h3 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              A Note from the Founder
            </h3>
            <p className={`text-lg leading-relaxed mb-4 italic ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              "Most startups fail not because of bad ideas, but because of slow execution. At Venturemond, 
              we've built a system that moves fast, validates ruthlessly, and ships relentlessly. We're not 
              here to be another vendor — we're here to be the partner you wish you had from day one."
            </p>
            <div className={`text-right font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              — Kavyanth Munagala, Founder
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-green-700/95 via-green-800/95 to-emerald-900/95' 
          : 'bg-gradient-to-br from-green-600 via-green-700 to-emerald-800'
      }`}>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Venture?
            </h2>
            <p className="text-xl text-green-50 mb-10">
              Let's turn your idea into a market-ready product in 90 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-green-600 font-bold rounded-xl text-lg shadow-2xl"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10"
                >
                  Partner With Studio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
