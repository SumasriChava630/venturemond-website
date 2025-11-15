"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

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

  const categories = ["All", "Case Stories", "Founder Notes", "Behind the Builds", "Venture Stories"]

  const blogPosts = [
    {
      title: "Building a SaaS Platform from Zero to Launch",
      excerpt: "How we partnered with a fintech startup to build and launch their MVP in 90 days, achieving product-market fit.",
      date: "Nov 12, 2025",
      category: "Case Stories",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Execution > Ideas: Why Speed Matters in Startups",
      excerpt: "Most startups fail not because of bad ideas, but because of slow execution. Here's how we think about speed.",
      date: "Nov 10, 2025",
      category: "Founder Notes",
      readTime: "5 min read"
    },
    {
      title: "Building Real-Time Collaboration Features in Next.js",
      excerpt: "Technical deep-dive into implementing WebSocket-based real-time features using Next.js and Socket.io.",
      date: "Nov 8, 2025",
      category: "Behind the Builds",
      readTime: "12 min read"
    },
    {
      title: "From Idea to $100K ARR: A Founder's Journey",
      excerpt: "How our venture studio model helped a first-time founder validate, build, and scale their SaaS product.",
      date: "Nov 5, 2025",
      category: "Venture Stories",
      readTime: "10 min read",
      featured: true
    },
    {
      title: "Mobile-First E-commerce: A Complete Redesign",
      excerpt: "Redesigning a legacy e-commerce platform for mobile users, resulting in 45% increase in conversions.",
      date: "Nov 3, 2025",
      category: "Case Stories",
      readTime: "7 min read"
    },
    {
      title: "Why We Don't Chase Trends (And Neither Should You)",
      excerpt: "Building sustainable businesses means focusing on fundamentals, not the latest hype cycle.",
      date: "Oct 30, 2025",
      category: "Founder Notes",
      readTime: "4 min read"
    },
    {
      title: "Optimizing Database Queries for Scale",
      excerpt: "Lessons learned from scaling a database from 10K to 1M+ records while maintaining performance.",
      date: "Oct 28, 2025",
      category: "Behind the Builds",
      readTime: "9 min read"
    },
    {
      title: "Bootstrapped to Series A: A Co-Creation Story",
      excerpt: "Supporting a founder from validation to Series A funding through strategic product development.",
      date: "Oct 25, 2025",
      category: "Venture Stories",
      readTime: "11 min read"
    }
  ]

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

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
              ✍️ Venturemond Blog
            </motion.div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Insights. Stories. <span className={darkMode ? 'text-green-400' : 'text-green-600'}>Execution.</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Real stories from building products, working with founders, and scaling ventures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              Featured Stories
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 group ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                      : 'bg-white border-slate-200 hover:border-green-600'
                  }`}
                >
                  <div className={`h-48 ${
                    darkMode ? 'bg-gradient-to-br from-green-900/30 to-slate-800' : 'bg-gradient-to-br from-green-100 to-slate-100'
                  } flex items-center justify-center`}>
                    <span className="text-6xl">⭐</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>
                        {post.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        Featured
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className={`mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className={`flex items-center justify-between text-sm ${
                      darkMode ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? darkMode
                      ? 'bg-green-600 text-white'
                      : 'bg-green-600 text-white'
                    : darkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}
          >
            {activeCategory === "All" ? "All Posts" : activeCategory}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600'
                }`}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                }`}>
                  {post.category}
                </span>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {post.excerpt}
                </p>
                
                <div className={`flex items-center justify-between text-sm ${
                  darkMode ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className={`mt-4 pt-4 border-t ${
                  darkMode ? 'border-slate-700' : 'border-slate-200'
                }`}>
                  <span className={`text-sm font-medium group-hover:text-green-600 transition-colors ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    Read more →
                  </span>
                </div>
              </motion.article>
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

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Next Product?
            </h2>
            <p className="text-xl text-green-50 mb-10 max-w-3xl mx-auto">
              Whether you need a full venture studio partner or want to start a specific project, we're here to help turn your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Partner With Venturemond
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-all duration-300"
              >
                Start a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
