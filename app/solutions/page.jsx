"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function SolutionsPage() {
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

  const services = [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "End-to-end web and mobile application development using modern frameworks and technologies.",
      features: ["Next.js & React", "Node.js & Express", "Mobile (Flutter/React Native)", "API Development"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality for exceptional experiences.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      icon: "🚀",
      title: "Product Strategy",
      description: "Strategic planning and roadmapping to ensure your product meets market needs and business goals.",
      features: ["Market Analysis", "Product Roadmaps", "Feature Prioritization", "Go-to-Market Strategy"]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Scalable infrastructure, CI/CD pipelines, and cloud architecture for modern applications.",
      features: ["AWS/GCP/Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Logging"]
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Comprehensive security audits, compliance implementation, and data protection strategies.",
      features: ["Security Audits", "GDPR/HIPAA Compliance", "Penetration Testing", "Data Encryption"]
    },
    {
      icon: "📊",
      title: "Data & Analytics",
      description: "Transform data into actionable insights with custom analytics solutions and dashboards.",
      features: ["Data Visualization", "Business Intelligence", "Predictive Analytics", "Custom Dashboards"]
    }
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, challenges, and technical requirements through in-depth consultations."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy, technology stack, and project roadmap tailored to your needs."
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create intuitive interfaces and experiences that align with your brand and user expectations."
    },
    {
      number: "04",
      title: "Development",
      description: "Our engineers build your solution using agile methodologies with regular updates and feedback loops."
    },
    {
      number: "05",
      title: "Launch",
      description: "We deploy your solution with comprehensive testing, monitoring, and support for a smooth rollout."
    },
    {
      number: "06",
      title: "Scale",
      description: "Post-launch optimization, feature enhancements, and ongoing support to help your product grow."
    }
  ]

  const technologies = [
    { name: "Next.js", icon: "⚛️" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "Flutter", icon: "📱" },
    { name: "Firebase", icon: "🔥" }
  ]

  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      client: "Retail Startup",
      result: "45% increase in conversions",
      tags: ["UI/UX", "Full-Stack", "Cloud"]
    },
    {
      title: "Healthcare Management System",
      client: "Medical Provider",
      result: "70% reduction in admin time",
      tags: ["HIPAA Compliance", "API Development", "Security"]
    },
    {
      title: "Real-Time Analytics Dashboard",
      client: "SaaS Company",
      result: "Real-time insights for 50K+ users",
      tags: ["Data Analytics", "Visualization", "Scale"]
    }
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
        
        {/* Animated Background Grid */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className={`absolute w-1 h-1 rounded-full ${
                  darkMode ? 'bg-green-400' : 'bg-green-600'
                }`}
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`
                }}
              />
            ))}
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
              🛠️ Custom Solutions
            </motion.div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Tailored Technology{" "}
              <motion.span 
                className={darkMode ? 'text-green-400' : 'text-green-600'}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                For Your Business
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Full-stack development, UI/UX design, and strategic consulting for businesses ready to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="#services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 font-bold rounded-xl border-2 ${
                    darkMode 
                      ? 'border-green-500 text-green-400 hover:bg-green-900/20' 
                      : 'border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  View Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 scroll-mt-20">
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
              Our Services
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Comprehensive solutions for your specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600 hover:shadow-xl'
                }`}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
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

      {/* Our Process */}
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
              Our Process
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              A proven 6-step approach to delivering exceptional solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border-2 relative ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                  darkMode 
                    ? 'bg-green-900/30 text-green-400 border-2 border-green-800' 
                    : 'bg-green-100 text-green-600 border-2 border-green-200'
                }`}>
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Technologies We Use
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Modern, battle-tested tech stack
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-4 rounded-xl border-2 text-center ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600'
                }`}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-green-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Success Stories
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Real results for real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border-2 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                    : 'bg-white border-slate-200 hover:border-green-600 hover:shadow-lg'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {study.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                  {study.client}
                </p>
                <div className={`text-3xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {study.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        darkMode 
                          ? 'bg-green-900/30 text-green-400' 
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Build Your Solution?
            </h2>
            <p className="text-xl text-green-50 mb-10">
              Let's discuss your project and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-green-600 font-bold rounded-xl text-lg shadow-2xl"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10"
                >
                  Schedule a Call
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
