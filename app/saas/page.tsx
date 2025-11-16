"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function SaaSPage() {
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

  const products = [
    {
      name: "Workspace",
      status: "Live",
      statusColor: "green",
      icon: "☁️",
      tagline: "Private. Smart. Seamless.",
      description: "Your intelligent workspace for collaboration, documentation, and productivity — built for privacy-conscious teams.",
      features: ["End-to-end encryption", "Real-time collaboration", "AI-powered search", "Offline-first design"]
    },
    {
      name: "Automate",
      status: "Prototype",
      statusColor: "green",
      icon: "⚡",
      tagline: "Workflows on Autopilot",
      description: "No-code automation platform that connects your tools and eliminates repetitive tasks.",
      features: ["Visual workflow builder", "1000+ integrations", "Conditional logic", "Scheduled triggers"]
    },
    {
      name: "CRM",
      status: "Research",
      statusColor: "green",
      icon: "🤝",
      tagline: "Relationships, Simplified",
      description: "Modern CRM designed for startups and small teams who value simplicity over complexity.",
      features: ["Contact management", "Pipeline tracking", "Email integration", "Custom fields"]
    },
    {
      name: "Desk AI",
      status: "Concept",
      statusColor: "green",
      icon: "🤖",
      tagline: "Your AI Assistant",
      description: "Intelligent assistant that helps you write, research, and make decisions faster.",
      features: ["Context-aware responses", "Multi-language support", "Document analysis", "Task automation"]
    }
  ]

  const buildProcess = [
    { step: "Research", desc: "User interviews, market analysis, competitive research" },
    { step: "Design", desc: "UX prototypes, design systems, user testing" },
    { step: "Build", desc: "Agile development, continuous integration, beta testing" },
    { step: "Scale", desc: "Performance optimization, feature expansion, user growth" }
  ]

  const differentiators = [
    { icon: "🔒", title: "Privacy First", desc: "End-to-end encryption, zero tracking, your data stays yours" },
    { icon: "⚡", title: "Lightning Fast", desc: "Optimized for speed, offline-capable, sub-100ms response times" },
    { icon: "🎨", title: "Design-Driven", desc: "Beautiful interfaces, thoughtful UX, delightful interactions" },
    { icon: "🌍", title: "Built to Scale", desc: "Cloud-native architecture, global CDN, 99.9% uptime SLA" },
    { icon: "🔧", title: "Developer Friendly", desc: "REST APIs, webhooks, extensive documentation, SDK libraries" }
  ]

  const cloudPositions = [100, 250, 400, 550, 700, 150, 350, 500, 650, 200, 450, 600, 300, 550, 100]

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
        
        {isClient && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {cloudPositions.map((yPos, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: -100,
                  y: yPos,
                  opacity: 0
                }}
                animate={{ 
                  x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
                  opacity: [0, 0.3, 0.3, 0]
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear"
                }}
                className={`absolute text-4xl ${darkMode ? 'opacity-20' : 'opacity-30'}`}
              >
                ☁️
              </motion.div>
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
              ☁️ SaaS Division
            </motion.div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Building Smarter Software{" "}
              <motion.span 
                className={darkMode ? 'text-green-400' : 'text-green-600'}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                for the Modern World
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Privacy-first. Scalable. Design-driven SaaS products that people love to use.
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
                  Join Waitlist
                </motion.button>
              </Link>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 font-bold rounded-xl border-2 ${
                    darkMode 
                      ? 'border-green-500 text-green-400 hover:bg-green-900/20' 
                      : 'border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  Partner With SaaS Division
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Venturemond SaaS */}
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
              About Venturemond SaaS
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              We build software that respects your privacy, scales effortlessly, and feels great to use. 
              Every product we create starts with a simple question: <span className="font-bold text-green-600">
              "Would we use this ourselves?"</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔐", title: "Privacy by Design", desc: "Zero tracking, end-to-end encryption, GDPR compliant" },
              { icon: "📈", title: "Built to Scale", desc: "Cloud-native, global infrastructure, auto-scaling" },
              { icon: "✨", title: "Design-First", desc: "Beautiful UX, intuitive interfaces, delightful interactions" }
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
                <div className="text-6xl mb-4">{item.icon}</div>
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

      {/* Featured Product - Workspace */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-green-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-10 md:p-16 border-2 relative overflow-hidden ${
              darkMode 
                ? 'bg-gradient-to-br from-green-900/30 to-slate-800 border-green-800' 
                : 'bg-gradient-to-br from-green-100 to-white border-green-200'
            }`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 text-[200px] opacity-10"
            >
              ☁️
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                }`}>
                  ✓ LIVE NOW
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Venturemond Workspace
                </h2>
                <p className={`text-xl font-semibold mb-6 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  Private. Smart. Seamless.
                </p>
                <p className={`text-lg leading-relaxed mb-8 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Your intelligent workspace for collaboration, documentation, and productivity — built for privacy-conscious teams who demand more.
                </p>
                <Link href="/#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700"
                  >
                    Get Early Access
                  </motion.button>
                </Link>
              </div>

              <div className="space-y-3">
                {["End-to-end encryption", "Real-time collaboration", "AI-powered search", "Offline-first design"].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      darkMode ? 'bg-slate-800/50' : 'bg-white/70'
                    }`}
                  >
                    <div className={`text-2xl ${darkMode ? 'text-green-400' : 'text-green-600'}`}>✓</div>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Suite */}
      <section className="py-20">
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
              Product Suite
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Current products and what's coming next
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl border-2 relative overflow-hidden group ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600 hover:shadow-xl'
                }`}
              >
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                }`}>
                  {product.status}
                </div>

                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {product.name}
                </h3>
                <p className={`font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {product.tagline}
                </p>
                <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-green-400' : 'bg-green-600'}`} />
                      <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
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
              How We Build
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Our 4-step SaaS product process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
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
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold ${
                    darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
                  }`}
                >
                  {idx + 1}
                </motion.div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {process.step}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Venturemond SaaS */}
      <section className="py-20">
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
              Why Venturemond SaaS
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              5 differentiators that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-2xl border-2 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600 hover:shadow-lg'
                }`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-green-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-green-800' 
                : 'bg-gradient-to-br from-green-100 to-white border-green-200'
            }`}
          >
            <div className="text-5xl mb-6 text-center">💭</div>
            <h3 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              A Note from the Founder
            </h3>
            <p className={`text-lg leading-relaxed mb-4 italic ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              "The SaaS world is noisy. Too many products that track everything, sell your data, and treat users 
              as metrics. We're building the opposite — software that respects you, works offline, and feels great. 
              Every line of code we write asks: would we trust this with our own data?"
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
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-green-50 mb-10">
              Join our waitlist or partner with us to build the next generation of SaaS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-green-600 font-bold rounded-xl text-lg shadow-2xl"
                >
                  Join Waitlist
                </motion.button>
              </Link>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10"
                >
                  Partner With SaaS Division
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
