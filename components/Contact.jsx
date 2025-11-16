"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState("contact")
  const [darkMode, setDarkMode] = useState(false)
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    division: "Studio",
    service: "",
    message: "",
    budget: "",
    timeline: ""
  })

  // Waitlist Form State
  const [waitlistForm, setWaitlistForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    reason: ""
  })

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

  // Dynamic service options based on division
  const serviceOptions = {
    Studio: [
      "MVP Development",
      "Product Strategy",
      "Full-Stack Development",
      "UI/UX Design",
      "Tech Consulting"
    ],
    SaaS: [
      "Venturemond Workspace",
      "Custom SaaS Solution",
      "API Integration",
      "Enterprise Plan",
      "Other"
    ]
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      })

      if (res.ok) {
        setStatus("✅ Message sent successfully! We'll get back to you soon.")
        setContactForm({
          name: "",
          email: "",
          company: "",
          division: "Studio",
          service: "",
          message: "",
          budget: "",
          timeline: ""
        })
        setTimeout(() => setStatus(""), 5000)
      } else {
        const errorData = await res.json()
        setStatus(`❌ Error: ${errorData.error || 'Failed to send message'}`)
        setTimeout(() => setStatus(""), 5000)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus("❌ Network error. Please check your connection and try again.")
      setTimeout(() => setStatus(""), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault()
    setStatus("Processing...")
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waitlistForm),
      })

      if (res.ok) {
        setStatus("🎉 You're in! We'll notify you when early access opens.")
        setWaitlistForm({
          name: "",
          email: "",
          company: "",
          teamSize: "",
          reason: ""
        })
        setTimeout(() => setStatus(""), 6000)
      } else {
        const errorData = await res.json()
        setStatus(`❌ Error: ${errorData.error || 'Failed to join waitlist'}`)
        setTimeout(() => setStatus(""), 5000)
      }
    } catch (error) {
      console.error('Waitlist form error:', error)
      setStatus("❌ Network error. Please check your connection and try again.")
      setTimeout(() => setStatus(""), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={`min-h-screen pt-24 pb-16 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-green-500/20' : 'bg-green-200/30'
          }`}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-blue-500/20' : 'bg-blue-200/30'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Form Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className={`inline-flex rounded-xl p-1 ${
            darkMode ? 'bg-slate-800' : 'bg-slate-100'
          }`}>
            <button
              onClick={() => {
                setActiveForm("contact")
                setStatus("")
              }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeForm === "contact"
                  ? 'bg-green-600 text-white shadow-lg'
                  : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                setActiveForm("waitlist")
                setStatus("")
              }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeForm === "waitlist"
                  ? 'bg-green-600 text-white shadow-lg'
                  : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Workspace Waitlist
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeForm === "contact" ? (
            // CONTACT FORM
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Get In Touch
                </h1>
                <p className={`text-lg max-w-2xl mx-auto ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Studio inquiries, SaaS partnerships, or general questions — we're here to help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Contact Information
                    </h3>
                    <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Whether you need venture studio support, SaaS solutions, or strategic partnerships.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: "📧", label: "Email", value: "hello@venturemond.com", link: "mailto:hello@venturemond.com" },
                      { icon: "📞", label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
                      { icon: "📍", label: "Location", value: "Hyderabad, India", link: "#" },
                      { icon: "💼", label: "LinkedIn", value: "Venturemond", link: "https://linkedin.com/company/venturemond" }
                    ].map((item, idx) => (
                      <motion.a
                        key={idx}
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ x: 5 }}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                          darkMode 
                            ? 'bg-slate-800 border-slate-700 hover:border-green-500' 
                            : 'bg-white border-slate-200 hover:border-green-600'
                        }`}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                            {item.label}
                          </div>
                          <div className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {item.value}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleContactSubmit} className={`p-8 rounded-2xl border ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                }`}>
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                            : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                        }`}
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                            : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Company / Startup
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                            : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                        }`}
                        placeholder="Company name"
                      />
                    </div>

                    {/* Division */}
                    <div>
                      <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Division *
                      </label>
                      <select
                        required
                        disabled={isSubmitting}
                        value={contactForm.division}
                        onChange={(e) => setContactForm({ ...contactForm, division: e.target.value, service: "" })}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                            : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                        }`}
                      >
                        <option value="Studio">Venture Studio</option>
                        <option value="SaaS">SaaS Division</option>
                      </select>
                    </div>

                    {/* Service (Dynamic based on Division) */}
                    <div>
                      <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Service / Product *
                      </label>
                      <select
                        required
                        disabled={isSubmitting}
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                            : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions[contactForm.division].map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          Budget
                        </label>
                        <select
                          disabled={isSubmitting}
                          value={contactForm.budget}
                          onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                            darkMode 
                              ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                              : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                          }`}
                        >
                          <option value="">Select range</option>
                          <option value="<10k">&lt; $10k</option>
                          <option value="10k-50k">$10k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value=">100k">&gt; $100k</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          Timeline
                        </label>
                        <select
                          disabled={isSubmitting}
                          value={contactForm.timeline}
                          onChange={(e) => setContactForm({ ...contactForm, timeline: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                            darkMode 
                              ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                              : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                          }`}
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (&lt; 1 month)</option>
                          <option value="1-3m">1-3 months</option>
                          <option value="3-6m">3-6 months</option>
                          <option value="6m+">6+ months</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Project Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        disabled={isSubmitting}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all resize-none ${
                          darkMode 
                            ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                            : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                        }`}
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className={`w-full px-8 py-4 bg-green-600 text-white font-semibold rounded-lg transition-all shadow-lg ${
                        isSubmitting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-green-700'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    {/* Status */}
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg text-center font-medium ${
                          status.includes("✅") 
                            ? darkMode 
                              ? "bg-green-900/30 text-green-400 border border-green-800" 
                              : "bg-green-100 text-green-700"
                            : darkMode
                              ? "bg-red-900/30 text-red-400 border border-red-800"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {status}
                      </motion.div>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            // WAITLIST FORM
            <motion.div
              key="waitlist"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="text-6xl mb-6"
                >
                  ☁️
                </motion.div>
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Join the Venturemond Workspace Waitlist
                </h1>
                <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Be the first to experience our private, intelligent workspace.
                </p>
              </div>

              {/* Waitlist Form */}
              <form onSubmit={handleWaitlistSubmit} className={`p-8 md:p-10 rounded-2xl border ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
              }`}>
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={waitlistForm.name}
                      onChange={(e) => setWaitlistForm({ ...waitlistForm, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                        darkMode 
                          ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                          : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                      }`}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={waitlistForm.email}
                      onChange={(e) => setWaitlistForm({ ...waitlistForm, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                        darkMode 
                          ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                          : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Company <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={waitlistForm.company}
                      onChange={(e) => setWaitlistForm({ ...waitlistForm, company: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                        darkMode 
                          ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                          : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                      }`}
                      placeholder="Company name"
                    />
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Team Size <span className="text-slate-500">(optional)</span>
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={waitlistForm.teamSize}
                      onChange={(e) => setWaitlistForm({ ...waitlistForm, teamSize: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                        darkMode 
                          ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                          : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                      }`}
                    >
                      <option value="">Select team size</option>
                      <option value="1">Just me</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="11-50">11-50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </div>

                  {/* Why Interested */}
                  <div>
                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Why are you interested? <span className="text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      disabled={isSubmitting}
                      value={waitlistForm.reason}
                      onChange={(e) => setWaitlistForm({ ...waitlistForm, reason: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all resize-none ${
                        darkMode 
                          ? 'bg-slate-900 border-slate-700 focus:border-green-500 text-white disabled:opacity-50' 
                          : 'bg-slate-50 border-slate-200 focus:border-green-600 text-slate-900 disabled:opacity-50'
                      }`}
                      placeholder="Tell us what excites you about Venturemond Workspace..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full px-8 py-4 bg-green-600 text-white font-semibold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-green-700'
                    }`}
                  >
                    <span>{isSubmitting ? 'Processing...' : 'Join Waitlist'}</span>
                    {!isSubmitting && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </motion.button>

                  {/* Status */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-lg text-center font-medium ${
                        status.includes("🎉") 
                          ? darkMode 
                            ? "bg-green-900/30 text-green-400 border border-green-800" 
                            : "bg-green-100 text-green-700"
                          : darkMode
                            ? "bg-red-900/30 text-red-400 border border-red-800"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {status}
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
